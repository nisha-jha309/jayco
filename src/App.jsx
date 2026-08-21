import Home from "./pages/home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { BrowserRouter,Route,Routes } from "react-router"
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}
export default App
