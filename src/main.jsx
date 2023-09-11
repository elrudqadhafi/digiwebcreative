import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import PaketPage from "./pages/PaketPage"
import OrderPage from "./pages/OrderPage"
import TutorialPage from "./pages/TutorialPage"
import FaqPage from "./pages/FaqPage"
import AboutPage from "./pages/AboutPage"
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import ErrorPage from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/paket-website",
    element: <PaketPage />,
  },
  {
    path: "/pemesanan-pembayaran",
    element: <OrderPage />,
  },
  {
    path: "/tutorial",
    element: <TutorialPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/tentang-kami",
    element: <AboutPage />,
  },
  {
    path: "/syarat-ketentuan",
    element: <SyaratKetentuanPage />,
  },
  {
    path: "/kebijakan-privasi",
    element: <PrivacyPolicy />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
