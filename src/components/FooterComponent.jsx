import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

import FooterImg from "../assets/logonav.png"

const FooterComponent = () => {
  return (
    <footer>
      <Row>
        <Col lg="5" xs="12">
          <div className="footer-logo">
            <img src={FooterImg} alt="logo-footer" />
            <h2>
              Web<span>Pro</span>Tech
            </h2>
          </div>
          <p>
            Membantu bisnis mengukir jejak digital mereka sendiri melalui
            website yang memadukan kreativitas, teknologi, dan strategi
            pemasaran yang cerdas.
          </p>
          <div className="alamat">
            <i className="ri-map-pin-2-line"></i>
            <p>JL.Riau - Kel.Kp Baru, Kec.Senapelan, Pekanbaru, Riau.</p>
          </div>
          <h3>PT MAGRIBI INTEGRATED TECHNOLOGY </h3>
          <div className="alamat-pt">
            <i className="ri-map-pin-2-line"></i>
            <p>
              JL. Gegerkalong Girang RT: 07/01 No. 33 Bandung 40153, <br /> Jawa
              Barat.
            </p>
          </div>
        </Col>
        <Col lg="2">
          <h5 className="fw-bold">Menu</h5>
          <div className="garis-1"></div>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/paket-website">Paket Web</Link>
          </li>
          <li>
            <Link to="/pemesanan-pembayaran">Pemesanan & Pembayaran</Link>
          </li>
          <li>
            <Link to="/tutorial">Tutorial</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </Col>
        <Col lg="2">
          <h5 className="fw-bold">Perusahaan</h5>
          <div className="garis-1"></div>
          <li>
            <Link to="/tentang-perusahaan">Tentang Kami</Link>
          </li>
          <h5 className="fw-bold">Legal</h5>
          <div className="garis-1"></div>
          <li>
            <Link to="/syarat-ketentuan">Syarat & Ketentuan</Link>
          </li>
          <li>
            <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
          </li>
        </Col>
        <Col lg="3" className="kontak">
          <h5 className="pb-3">Kontak Kami</h5>
          <h6>
            <i className="ri-whatsapp-line"></i>
            0813 6444 3540
          </h6>
          <h6>
            <i className="ri-mail-line"></i>
            wepprotech@gmail.com
          </h6>
          <div className="sosial">
            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-github-fill"></i>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            &copy; {new Date().getFullYear()}{" "}
            <span className="fw-bold">Web-Pro Tech.</span>All rights reserved
          </h4>
        </Col>
      </Row>
    </footer>
  )
}

export default FooterComponent
