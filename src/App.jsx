import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import HomePage from "./pages/HomePage"
import OrderPage from "./pages/OrderPage"
import PaketPage from "./pages/PaketPage"
import AboutPage from "./pages/AboutPage"
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import FaqPage from "./pages/FaqPage"
import TutorialPage from "./pages/TutorialPage"
import FooterComponent from "./components/FooterComponent"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pemesanan-pembayaran" element={<OrderPage />} />
        <Route path="/paket-website" element={<PaketPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/tentang-kami" element={<AboutPage />} />
        <Route path="/syarat-ketentuan" element={<SyaratKetentuanPage />} />
        <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
