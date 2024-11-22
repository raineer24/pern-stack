import { Route, Routes } from "react-router-dom"
import Login from "./_ui_design/pages/Login"
import Home from "./_ui_design/pages/Home"
import Signup from "./_ui_design/pages/Signup"


function App() {
 
  return (
    <div className="p-4 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
   
    
  )
}

export default App
