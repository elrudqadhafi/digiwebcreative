import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
