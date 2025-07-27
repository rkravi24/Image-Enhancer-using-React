import { useState } from "react"
import Home from "./components/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">

        <div className="text-center mb-4">
          <h1 className="font-bold text-gray-800 text-5xl mb-2">Image Enhancer</h1>
          <p>Upload your image and let AI enhance in a second</p>
        </div>

        <Home />

        <div className="text-lg text-gray-800 mt-2">
         Powered by @DevRk
        </div>


      </div>
  )
}

export default App
