import React from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import ScrollToTop from "../components/ScrollToTop"
import FooterComponent from "../components/FooterComponent"

const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <ScrollToTop />
      <div className="about-page w-100">
        <Helmet>
          <title>Tentang Kami - Digi Web Creative</title>
        </Helmet>
        <Row>
          <Col>
            <h3>Tentang Kami</h3>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <h5>Selamat Datang di Digi Web Creative.</h5>
              <p className="mt-4">
                <span>DIGI WEB CREATIVE</span> sebagai salah satu yang terkemuka
                dalam industri pembuatan website,Tugas utama kami adalah
                menyediakan layanan terdepan dalam pembuatan website yang
                mendefinisikan kualitas dan keunggulan serta responsif terhadap
                kebutuhan pelanggan. Dengan didukung sepenuhnya oleh <br />
                <span>PT MAGRIBI INTEGRATED TECHNOLOGY</span>, Kami menghadirkan
                solusi teknologi informasi yang menjawab berbagai tantangan yang
                dihadapi masyarakat. Setiap masalah dianggap sebagai peluang
                untuk menciptakan perubahan positif dalam kehidupan semua orang.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>وَخَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ</h1>
              <p>
                “Dan sebaik-baik manusia adalah yang paling bermanfaat bagi
                manusia lainnya.”
              </p>
              <p>
                (HR. Al-Qadlaa’iy dalam Musnad Asy-Syihaab no. 129,
                Ath-Thabaraaniy dalam Al-Ausath no. 5787)
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Visi Kami</h4>
              <p>
                menjadi perusahaan yang tumbuh dan memberikan dampak positif
                melalui pemanfaatan Teknologi Informasi. Kami memandang
                teknologi sebagai alat yang memungkinkan inovasi, efisiensi, dan
                kemajuan yang berkelanjutan dalam berbagai aspek kehidupan.
                Dengan tekad ini, kami berkomitmen untuk terus berkembang dan
                memberikan manfaat maksimal kepada masyarakat dan dunia melalui
                solusi-solusi teknologi yang kami hadirkan.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                Kultur <span>Inovatif</span>
              </h6>
              <p>
                Kami mengacu pada suasana atau budaya yang di mana inovasi dan
                kreativitas diberi nilai tinggi dan diupayakan. Ini adalah
                lingkungan di mana kami didorong untuk berpikir "di luar kotak,"
                menciptakan ide baru, dan berpartisipasi dalam pengembangan
                solusi inovatif untuk masalah yang dihadapi dan kesuksesan
                perusahaan.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <div className="about-card">
                <h2>Keterbukaan terhadap Ide Baru</h2>
                <h6>
                  Semua merasa nyaman dalam mengusulkan ide-ide baru tanpa takut
                  dihakimi atau diremehkan.
                </h6>
              </div>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <div className="about-card">
                <h2>Keberkahan</h2>
                <h6>
                  Kami meyakini bahwa tujuan utama bisnis bukan hanya mencari
                  laba semata, melainkan juga menciptakan berkah dan memperoleh
                  ridho dari Tuhan Yang Maha Esa.
                </h6>
              </div>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <div className="about-card">
                <h2>Kolaborasi</h2>
                <h6>
                  Tim bekerja sama secara aktif, berbagi pengetahuan, dan
                  bekerja bersama untuk menghasilkan inovasi.
                </h6>
              </div>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <div className="about-card">
                <h2>Mendengar Pelanggan</h2>
                <h6>
                  Kami mendengarkan dengan baik umpan balik dari pelanggan dan
                  melibatkan mereka dalam pengembangan produk atau layanan baru.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  )
}

export default AboutPage
