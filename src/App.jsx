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
        <Route path="/" Component={HomePage} />
        <Route path="/pemesanan-pembayaran" Component={OrderPage} />
        <Route path="/paket-website" Component={PaketPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/tutorial" Component={TutorialPage} />
        <Route path="/tentang-perusahaan" Component={AboutPage} />
        <Route path="/syarat-ketentuan" Component={SyaratKetentuanPage} />
        <Route path="/kebijakan-privasi" Component={PrivacyPolicy} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
