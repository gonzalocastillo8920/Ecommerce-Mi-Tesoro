import { BrowserRouter, Route, Routes } from "react-router"

import Text from "../components/Text"
import Layout from "../layout/Layout"

import AboutUs from "../pages/AboutUs"
import Checkout from "../pages/Checkout"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Upload from "../pages/Upload"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about-us" element={<AboutUs/>} />
                    <Route path="upload" element={<Upload/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="checkout" element={<Checkout/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes