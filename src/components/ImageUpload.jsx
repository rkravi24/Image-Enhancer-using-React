const ImageUpload = (props) => {
    const showImageHandler = (e) => {
        // console.log(e.target.files[0]);
        const file = e.target.files[0]
        if (file) {
            props.uploadImageHandler(file)
        }
    }

    return (
        <>
            <div className="bg-white shadow-lg max-2xl  rounded-2xl p-4">

                <label
                    htmlFor="fileInput"
                    className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500">
                    <input type="file" id="fileInput" className="hidden" onChange={showImageHandler} />
                    <span className="text-lg font-medium text-gray-600">Click to upload your image</span>
                </label>

            </div>
        </>
    )
}
export default ImageUpload