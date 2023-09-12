import React from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"

import FaqImg from "../assets/faqimage.png"
import FaqComponent from "../components/FaqComponent"
import NavbarComponent from "../components/NavbarComponent"
import ScrollToTop from "../components/ScrollToTop"
import FooterComponent from "../components/FooterComponent"

const FaqPage = () => {
  return (
    <>
      <NavbarComponent />
      <ScrollToTop />
      <div className="faq-page">
        <Helmet>
          <title>Temukan Pertanyaanmu Disini - Web Pro Tech</title>
        </Helmet>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <img src={FaqImg} alt="faq-image" loading="lazy" />
            </Col>
            <Col lg="6">
              <h1>Perlu Bantuan?</h1>
              <h6>Jangan khawatir! Cari dan temukan pertanyaanmu disini.</h6>
            </Col>
          </Row>
          <Row>
            <FaqComponent />
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  )
}

export default FaqPage
