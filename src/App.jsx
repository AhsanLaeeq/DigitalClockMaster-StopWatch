import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Hero from "./Components/Hero/Hero"




function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>}>
    <Route index element ={<Hero/>}/>



      </Route>
    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
