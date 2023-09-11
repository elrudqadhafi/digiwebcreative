import React from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"

import FaqImg from "../assets/faqimage.png"
import FaqComponent from "../components/FaqComponent"

const FaqPage = () => {
  return (
    <div className="faq-page">
      <Helmet>
        <title>Temukan Pertanyaanmu Disini - Web Pro Tech</title>
      </Helmet>
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg="6">
            <img src={FaqImg} alt="faq-image" />
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
  )
}

export default FaqPage
