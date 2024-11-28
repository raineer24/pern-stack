import { Route, Routes } from "react-router-dom"
import Login from "./_ui_design/pages/Login"
import Home from "./_ui_design/pages/Home"
import Signup from "./_ui_design/pages/Signup"
import { Toaster } from "react-hot-toast"


function App() {
 
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
   
    
  )
}

export default App
