import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// We will create these two pages in a moment
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import About from "./pages/About"
import Tutorial from "./pages/Tutorial"
import Contact from "./pages/Contact"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index  path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}