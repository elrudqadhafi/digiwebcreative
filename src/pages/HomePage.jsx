import React from "react"
import Lottie from "lottie-react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"

import { benefit, semuaPaket } from "../data"

import Animation from "../lottie/animasidigital.json"
import DesignImg from "../assets/designkreatif1.png"
import FastLoadingImg from "../assets/fastloading.png"
import FullSupportImg from "../assets/fullsupport.png"
import PeopleCek from "../assets/kacapembesar.png"
import CompanyImg from "../assets/companyprofile.png"
import TokoImg from "../assets/tokoonline.png"
import LandingImg from "../assets/landingpage.png"
import MaintenceImg from "../assets/maintanance.png"

const HomePage = () => {
  const phoneNumber = "+6281364443540"
  const message1 =
    "Halo Web Pro Tech, saya ingin konsultasi untuk pembuatan website."
  const message2 = "Halo Web Pro Tech, saya ingin membuat website."
  const message3 =
    "Halo Web Pro Tech, saya ingin membuat website custom dengan fitur yang lengkap."

  const openWhatsAppChat = (message) => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}&text=${encodeURIComponent(message)}`
    window.location.href = whatsappURL
  }

  const emailAddress = "elrudqadhafi20@gmail.com"

  // Fungsi untuk menghandle klik pada tautan email
  function handleMailtoClick(event) {
    event.preventDefault() // Mencegah tindakan bawaan tautan

    // Pastikan emailAddress terdefinisi
    if (emailAddress) {
      const mailtoURL = `mailto:${emailAddress}`
      window.location.href = mailtoURL // Mengarahkan ke tautan email
    } else {
      console.error("Alamat email belum terdefinisi.")
    }
  }

  let navigate = useNavigate()

  const tigaPaket = semuaPaket.slice(0, 3)

  const handlePaketClick = (paket) => {
    navigate("/pemesanan-pembayaran", { state: { paket } })
  }

  return (
    <div className="homepage">
      <Helmet>
        <title>Jasa Pembuatan Website Pekanbaru</title>
        <meta
          name="description"
          content="Kami adalah penyedia layanan pembuatan website profesional di Pekanbaru. Dapatkan website modern, responsif, dan berkualitas tinggi untuk bisnis Anda. Hubungi kami untuk solusi digital terbaik."
        />
        <link rel="canonical" href="https://jasawebsitepekanbaru.site/" />
      </Helmet>
      <div
        className="whatsapp-floating"
        onClick={() => openWhatsAppChat(message1)}
      >
        <i className="ri-whatsapp-line"></i>
      </div>
      <header className="w-100 overflow-hidden">
        <Container>
          <Row className="header-box">
            <Col lg="6">
              <h1 className="mb-3">
                Wujudkan <span> Visi Digitalmu</span> <br /> Bersama kami
              </h1>
              <p className="mb-4">
                "Jasa Pembuatan Webiste" Merupakan layanan yang kami tawarkan.
                Yang berpusat di kota Pekanbaru, kami dapat membantu Anda dalam
                membangun dan mendesain website yang modern, responsif, dan
                berfokus pada konten. Kami dapat memberikan solusi pembuatan
                website profesional yang dapat membantu meningkatkan brand
                awareness dan bisnis Anda.Membantu Anda memenangkan persaingan
                bisnis modern yang ketat.
              </p>
              <button
                className="konsultasi"
                onClick={() => openWhatsAppChat(message1)}
              >
                Konsultasi
              </button>
              <button
                className="create"
                onClick={() => openWhatsAppChat(message2)}
              >
                Buat Website
              </button>
            </Col>
            <Col>
              <Lottie animationData={Animation} className="lottie" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="info-panel m-auto">
        <Container>
          <Row>
            <Col lg="4">
              <img src={DesignImg} alt="design image - freepik" />
              <h4>Profesional Design</h4>
              <p>
                Website yang di Desain dengan optimal untuk meningkatkan
                Kredibilitas bisnis Anda dan kepercayaan pengunjung.
              </p>
            </Col>
            <Col lg="4">
              <img src={FastLoadingImg} alt="fast loading image - freepik" />
              <h4>Fast Loading</h4>
              <p>
                Website yang kami buat telah dioptimalkan untuk kecepatan
                loading yang kurang dari 3 detik demi meningkatkan kenyamanan
                pengunjung.
              </p>
            </Col>
            <Col lg="4">
              <img src={FullSupportImg} alt="support image - freepik" />
              <h4>Full Support</h4>
              <p>
                Tim kami selalu siap untuk melayani dan memberikan support agar
                keamanan dan performa website selalu baik.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="penjelasan-empat">
        <Container>
          <Row>
            <h3>Jasa Website Professional</h3>
          </Row>
          <Row>
            <p>
              Kami tidak sekadar jasa website biasa,
              <span> Kami adalah solusi lengkap </span>
              yang Anda cari untuk kebutuhan Bisnis Anda.
            </p>
          </Row>
          <Row>
            <Col lg="3" className="offset-lg-3">
              <p>
                <i className="ri-check-line"></i>
                Website Toko Online (E-commerce)
              </p>
              <p>
                <i className="ri-check-line"></i>
                Website Company Profile
              </p>
              <p>
                <i className="ri-check-line"></i>
                Website Pendidikan
              </p>
              <p>
                <i className="ri-check-line"></i>
                Website Portofolio
              </p>
            </Col>
            <Col lg="4">
              <p>
                <i className="ri-check-line"></i>
                Website Kesehatan dan Kecantikan
              </p>
              <p>
                <i className="ri-check-line"></i>
                Website UMKM
              </p>
              <p>
                <i className="ri-check-line"></i>
                Website Komunitas
              </p>
              <p>
                <i className="ri-check-line"></i>
                Landing Page
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6" className="m-auto">
              <p>
                Anda tak perlu repot-repot, kami akan mengurus semuanya.
                Serahkan pembuatan dan pemeliharaan website pada kami.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="paket-website w-100 min-vh-100">
        <Container>
          <Row>
            <h3 className="text-center">Paket Website</h3>
          </Row>
          <Row>
            {tigaPaket.map((paket) => {
              return (
                <Col
                  key={paket.id}
                  lg="4"
                  md="10"
                  className="mt-lg-0 mt-4 mt-md-4 m-md-auto"
                >
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
                      onClick={() => handlePaketClick(paket)}
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
              <button
                className="paket-lengkap"
                onClick={() => navigate("/paket-website")}
              >
                Lihat Paket Lainnya
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="penjelasan">
        <Container>
          <Row>
            <h3 className="text-center">
              Website <span>Bukan Hanya</span> Sekedar Kartu Nama
            </h3>
            <p>
              Ibarat sebuah bisnis, website adalah tempat usaha yang perlu
              direncanakan secara matang dan berpotensi meningkatkan penjualan
            </p>
            <hr />
          </Row>
          <Row>
            <Col lg="4" md="6" className="mb-lg-0 mb-4">
              <div className="card-box">
                <h3>47%</h3>
                <p>
                  Pengguna internet tidak akan merekomendasikan sebuah brand
                  apabila tampilan websitenya tidak menarik
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-lg-0 mb-4">
              <div className="card-box">
                <h3>91%</h3>
                <p>
                  Konsumen memutuskan untuk melakukan pembelian atau menggunakan
                  layanan jasa setelah melihat websitenya
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" className="m-md-auto">
              <div className="card-box">
                <h3>83%</h3>
                <p>
                  Pengguna internet menilai kredibilitas sebuah perusahaan
                  berdasarkan desain situs website yang dimiliki.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="penjelasan-dua">
        <Container>
          <Row>
            <Col>
              <h3>Website adalah Aset Digital Semua Bisnis</h3>
              <div className="garis mt-4"></div>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <h5>
                Nah, cek nih! Kalau kita obrolin iklan-iklan di YouTube dan
                media sosial, hampir selalu ada ajakan buat "Cek Website Kami,
                Yuk!" Tapi, di balik ajakan itu, ada fakta seru yang perlu kita
                gali. Yuk, kita bahas beberapa hal keren tentang website dalam
                dunia pemasaran digital:
              </h5>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Bayangin, website itu kayak mata-mata digital yang kerja
                  diam-diam. Dari situ, kita bisa ngetahui siapa aja yang mampir
                  ke sana. Mulai dari usia, lokasi, sampe gaya hidup mereka.
                  Data ini bisa jadi senjata ampuh buat bikin strategi pemasaran
                  yang pas.
                </span>
              </li>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Percaya nggak, website itu kaya karyawan setia yang nggak
                  pernah nuntut gaji. Meskipun matahari udah tenggelam, website
                  tetap siaga. Artinya, calon pembeli bisa lihat-lihat produk
                  atau layanan kamu kapan aja, gak ada batasan waktu!
                </span>
              </li>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Di dunia website, nggak ada limit buat ngasih tahu semua
                  detail penting. Kamu bisa berbagi fitur produk, cerita sukses
                  pelanggan, sampai panduan step-by-step. Informasi yang lengkap
                  ini bisa ngebantu calon pelanggan buat ambil keputusan yang
                  mantap.
                </span>
              </li>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Website itu kayak taman bermain di mana kamu punya kendali
                  penuh. Gak perlu takut aturan platform lain atau drama ban!
                  Ini tempat kamu bisa berkreasi sesuai impianmu, bro / sist!.
                </span>
              </li>
            </Col>
            <Col lg="5" className="order-lg-2 mobile-order">
              <img src={PeopleCek} alt="webprotech" />
            </Col>
          </Row>
          <Row>
            <h5>
              Tapi, ada satu hal yang perlu diperhatikan... <br /> Bikin website
              yang keren dan bisa jualan ternyata butuh perhatian lebih, nih!
            </h5>
            <hr />
            <Col lg="6" className="m-auto">
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Kamu juga harus paham konsep mendesain website yang menarik
                  dan bisa bikin orang tertarik buat beli, tapi nggak gampang
                  loh.
                </span>
              </li>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Kamu juga perlu bikin copywriting yang bisa bikin calon
                  konsumen tertarik datang ke web kamu. Gak semudah kelihatannya
                  sih!
                </span>
              </li>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Jangan dilupain, web juga perlu maintenance konten secara
                  rutin. Tuh, nggak sesimpel kelihatan.
                </span>
              </li>
            </Col>
            <Col lg="6" className="m-auto">
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Nggak cuma bikin aja, kamu juga harus ikutin tren website biar
                  webmu nggak ketinggalan jaman.
                </span>
              </li>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Troubleshooting website juga perlu kamu kuasai, loh. Gak enak
                  kan kalau ada masalah di web, tapi gak tahu gimana
                  nanganinnya.
                </span>
              </li>
              <li>
                <span className="list-icon">
                  <i className="ri-check-line"></i>
                </span>
                <span className="list-text">
                  Kamu juga perlu ngerti cara menjadikan website jadi aset
                  digital buat bisnismu. Tapi tenang, ini juga butuh usaha
                  lebih.
                </span>
              </li>
            </Col>
            <h4>
              Tidak cuma itu aja, <br /> kamu juga harus siap menyisihkan waktu
              untuk ngurus bisnismu Soalnya, bikin dan urus website itu juga
              nggak main-main.
            </h4>
          </Row>
        </Container>
      </div>
      <div className="penjelasan-tiga">
        <Container>
          <Row>
            <h3>Inovasi untuk pertumbuhan bisnis terbaik</h3>
            <div className="garis"></div>
          </Row>
          <Row>
            <p>Kami punya solusi yang cocok untuk kebutuhan Anda.</p>
          </Row>
          <Row>
            <Col lg="7" className="m-auto">
              <p>
                Dengan layanan kami, Anda bebas fokus pada bisnis Anda,
                sementara kami mengurus semua kebutuhan digital Anda.Tidak perlu
                repot mencari ahli IT untuk mengelola situs web Anda, tak perlu
                panik mengatasi kendala teknis, dan jangan khawatir tentang
                desain situs yang menarik,kami punya solusi lengkap untuk
                semuanya! Hemat waktu, tenaga, dan biaya dengan layanan yang
                ramah ini.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="layanan-kami w-100 min-vh-100">
        <Container>
          <Row>
            <h3 className="text-center">Layanan Web-Pro Tech</h3>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6">
              <img src={CompanyImg} alt="companyprofile" />
            </Col>
            <Col lg="6">
              <h5>Website Company Profile</h5>
              <p>
                Tingkatkan Kredibilitas perusahaan Anda dengan Website keren dan
                menarik
              </p>
              <ul type="circle">
                <li>Gratis Hosting & Domain.com</li>
                <li>Optimasi SEO dan Mobile Friendly</li>
                <li>Desain Yang unik (Custom)</li>
                <li>Gratis Email Professional (nama@websiteanda.com)</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6">
              <h5>Website Toko Online (E-Commerce)</h5>
              <p>
                Tingkatkan kepercayaan pelanggan Anda melalui website toko
                online dengan fitur lengkap & mudah digunakan
              </p>
              <ul type="circle">
                <li>Gratis Hosting & Domain.com</li>
                <li>Optimasi SEO dan Mobile Friendly</li>
                <li>Jumlah Produk Unlimited</li>
                <li>Terintegrasi Payment Gataway</li>
              </ul>
            </Col>
            <Col lg="6" className="order-lg-2 mobile-layanan">
              <img src={TokoImg} alt="tokoonline" className="toko-img" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6">
              <img src={LandingImg} alt="landingpage" />
            </Col>
            <Col lg="6">
              <h5>Website Landing Page</h5>
              <p>
                ada yang namanya landing page, tujuannya buat bantu urusan
                bisnis, lho. Mulai dari ngebantu promosiin produk, nge-share
                konten asik, sampe nge-infoin acara seru yang lagi berjalan.
              </p>
              <ul type="circle">
                <li>Gratis Hosting & Domain.com</li>
                <li>Optimasi SEO dan Mobile Friendly</li>
                <li>Optimasi Loading Speed</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6">
              <h5>Maintenance Website</h5>
              <p>
                Kami siap menjaga situs web Anda tetap dalam performa terbaik!
                Dengan layanan maintenance profesional kami, kami memadukan
                pembaruan konten dan perbaikan rutin untuk menjaga keamanan,
                performa, dan fungsionalitas situs Anda dengan ramah pengguna.
              </p>
              <ul type="circle">
                <li>Pembaruan Konten</li>
                <li>Skalabilitas dan Peningkatan</li>
                <li>Backup Berkala</li>
                <li>Perkembangan Teknologi Terbaru</li>
              </ul>
            </Col>
            <Col lg="6" className="order-lg-2 mobile-layanan">
              <img src={MaintenceImg} alt="perawatanwebsite" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="benefit">
        <Container>
          <Row>
            <h3 className="text-center">Benefit Yang Kamu Dapat...</h3>
            <p className="text-center mt-2 mb-5">
              Nah, Kamu pasti bertanya-tanya apa saja yang akan Kamu dapatkan
              ketika memilih Web-Pro Tech sebagai partner digitalmu.Yuk kita
              lihat!
            </p>
          </Row>
          <Row>
            {benefit.map((benefit) => {
              return (
                <Col lg="4" md="6" key={benefit.id}>
                  <div className="benefit-box">
                    <img src={benefit.image} alt="allimagebenefil" />
                    <h5>{benefit.title}</h5>
                    <p>{benefit.desc}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <p className="text-center mt-5">
              Semua itu Gratis ya. Semua udah termasuk ke dalam paket yang kami
              tawarkan.
            </p>
          </Row>
        </Container>
      </div>
      <div className="all-fitur">
        <Container>
          <Row>
            <h3>Perlu website dengan fitur yang lebih banyak?...</h3>
            <p>
              Yuk! Jangan ragu untuk berdiskusi dengan kami mengenai fitur-fitur
              website yang kamu mau. <br /> Tim kami dengan senang hati membantu
              anda.
            </p>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-5">
            <button
              className="mb-lg-0 mb-md-0 mb-3"
              onClick={() => openWhatsAppChat(message3)}
            >
              <i className="ri-whatsapp-line"></i>
              WhatsApp
            </button>
            <button onClick={handleMailtoClick} className="email">
              <i className="ri-mail-send-fill"></i>
              Message
            </button>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage
