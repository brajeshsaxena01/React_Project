import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Mens } from "./components/Mens";
import { Womens } from "./components/Womens";
import { Unisex } from "./components/Unisex";


import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import "./components/Navbar.css"
import "./components/Footer.css"
import { Card } from './components/Body/Card';
import "./components/Body/Card.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/unisex" element={<Unisex />}></Route>
      </Routes>
      <Carousel/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
