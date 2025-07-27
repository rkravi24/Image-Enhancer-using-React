import Loading from "./Loding"

const ImagePreview = (props) => {
    return (
        <>
            <div className="mt-4 w-[800px] max-w-6xl flex">
                {/* original image */}
                <div className="w-1/2 h-[450px] border bg-white shadow-lg rounded-xl overflow-hidden">

                    <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Original Image</h2>

                    {props.uploaded ? (
                        <img src={props.uploaded} alt="" className="w-full h-full object-cover" />

                    ) : (
                        <div className="h-[405px] flex justify-center items-center bg-gray-200">No image selected</div>
                    )}

                </div>

                <div className="w-1/2 ml-4 h-[450px] border bg-white shadow-lg rounded-xl overflow-hidden">
                    <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Enhanced Image</h2>

                    <div className="relative w-full h-full">
                        {props.enhanced && !props.loading ? (
                            <>
                                <img src={props.enhanced} alt="Enhanced" className="w-full h-full object-cover" />

                                <button
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = props.enhanced;
                                        link.click();
                                    }}
                                    className="absolute cursor-pointer top-2 right-2 bg-green-400 bg-opacity-60 text-white px-3 py-1 text-sm rounded hover:bg-opacity-80 shadow-md"
                                >
                                    Download
                                </button>
                            </>
                        ) : props.loading ? (
                            <Loading />
                        ) : (
                            <div className="h-[405px] flex justify-center items-center bg-gray-200">No Enhanced Image</div>
                        )}
                    </div>
                </div>

            </div >
        </>
    )
}

export default ImagePreview