import axios from 'axios';
import { API_KEY,BASE_URL } from '../utils/config';

// const API_KEY = "wxnt8d5b57i7e3wta";
// const BASE_URL = "https://techhk.aoscdn.com";



export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file); //upload api method
        console.log("Image uploaded, task ID:", taskId);

        const enhancedImageData = await fetchImage(taskId); //fetch api method
        // console.log("return the value:",enhancedImageData);
        return enhancedImageData;

    } catch (error) {
        console.error("Error enhancing image:", error.response?.data || error.message);
    }
};


const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    const response = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY
            }
        }
    );

    if (!response.data?.data?.task_id) {
        throw new Error("Failed to upload image")
    }

    // console.log("Upload Response:", response.data);
    return response.data?.data?.task_id;
};


const fetchImage = async (taskId, maxRetries = 30, interval = 1000) => {
    let retries = 0;

    return new Promise((resolve, reject) => {
        const poll = async () => {
            if (retries >= maxRetries) {
                return reject(new Error("Polling timed out"));
            }

            try {
                const response = await axios.get(
                    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
                    {
                        headers: { "X-API-KEY": API_KEY }
                    }
                );

                console.log("Polling response:", response.data);

                if (response.data?.data?.progress < 100) {
                    retries++;
                    setTimeout(poll, interval);
                } else {
                    resolve(response.data?.data?.image);
                }
            } catch (err) {
                reject(err);
            }
        };

        poll();
    });
};
