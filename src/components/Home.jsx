import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"
import { enhancedImageAPI } from "../utils/enhancedImageApi"

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const uploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);

        // calling api method
        try {
            const enhancedURL = await enhancedImageAPI(file)
            // console.log("Reciving the value enhancedURL:", enhancedURL);

            setEnhancedImage(enhancedURL)
            setLoading(false)
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image..please try again later.")

        }
    }

    return (
        <>
            <ImageUpload uploadImageHandler={uploadImageHandler} />
            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage} />
        </>
    )
}

export default Home