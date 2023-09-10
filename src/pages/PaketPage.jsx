import React from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"
import { semuaPaket } from "../data"
import { useNavigate } from "react-router-dom"

const PaketPage = () => {
  let navigate = useNavigate()

  const handleOrderClick = (paket) => {
    navigate("/pemesanan-pembayaran", { state: { paket } })
  }

  const phoneNumber = "+6281364443540"
  const message =
    "Halo Web Pro Tech, saya ingin konsultasi untuk jasa maintenance website."

  const openWhatsAppChat = (message) => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}&text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="paket-page w-100 min-vh-100">
      <Helmet>
        <title>Paket Website - Web Pro Tech</title>
        <link
          rel="canonical"
          href="https://jasawebsitepekanbaru.site/paket-website"
        />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h3>Paket Website</h3>
          </Col>
        </Row>
        <Row>
          {semuaPaket.map((paket) => {
            return (
              <Col key={paket.id} lg="4" md="12" className="mt-4">
                <div className="plan-card">
                  <h4 className="text-center">{paket.title}</h4>
                  <p className=" desc text-center">{paket.description}</p>
                  <div className="etiquet-price">
                    <p>
                      {paket.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </div>
                  <button
                    className="btn-order mt-3 mb-3"
                    onClick={() => handleOrderClick(paket)}
                  >
                    Beli Paket
                  </button>
                  <div className="benefits-list">
                    <ul>
                      {paket.features.map((feature, index) => {
                        return (
                          <li key={index}>
                            <i className="ri-checkbox-circle-line"></i>
                            {feature}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col>
            <h3>Maintanance Website</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="4" className="m-auto">
            <div className="plan-card">
              <div className="etiquet-price">
                <button
                  className="btn-order mt-3 mb-3"
                  onClick={() => openWhatsAppChat(message)}
                >
                  Hubungi Kami
                </button>
              </div>
              <div className="benefits-list">
                <ul>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Pembaruan Konten
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Pemantauan Kinerja
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Optimisasi SEO
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Pemantauan Analitik
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Pengelolaan Konten
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Pembaruan Teknologi
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Back-up Berkala
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Pemeliharaan Kecepatan Website
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Perbaikan Design
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Komersialisasi
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>
                    Pemantauan Uptime
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PaketPage
