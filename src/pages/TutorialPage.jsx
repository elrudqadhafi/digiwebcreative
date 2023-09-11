import React from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"

import TutorImg from "../assets/tutorial2.png"
import TutorList1 from "../assets/tutorlist1.png"
import TutorList2 from "../assets/tutoriallist2.png"
import NavbarComponent from "../components/NavbarComponent"
import ScrollToTop from "../components/ScrollToTop"
import FooterComponent from "../components/FooterComponent"

const TutorialPage = () => {
  let navigate = useNavigate()

  return (
    <>
      <NavbarComponent />
      <ScrollToTop />
      <div className="tutorial">
        <Helmet>
          <title>Tutorial - Web Pro Tech</title>
        </Helmet>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <img src={TutorImg} alt="tutorial-image" />
            </Col>
            <Col lg="6">
              <h1>Tutorial Web-Pro Tech</h1>
              <h6>
                Masih bingung cara menggunakan Web-Pro Tech? <br /> Yuk baca
                langkah-langkahnya dibawah ini!
              </h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="pesan-dari-website">
                <div className="text-atas">
                  <h5>
                    Order Melalui Website{" "}
                    <i className="ri-arrow-down-s-line"></i>
                  </h5>
                </div>
                <img src={TutorList1} alt="tutorial-list-image" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="pesan-dari-website">
                <div className="text-atas">
                  <h5>
                    Order Melalui Admin <i className="ri-arrow-down-s-line"></i>
                  </h5>
                </div>
                <img src={TutorList2} alt="tutorial-list-image" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="9" className="m-auto pt-5 px-lg-5 px-3">
              <p>
                Untuk ketentuan pembayaran Kamu bisa membaca terlebih dahulu
                <span onClick={() => navigate("/syarat-ketentuan")}>
                  {" "}
                  disini.
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  )
}

export default TutorialPage
