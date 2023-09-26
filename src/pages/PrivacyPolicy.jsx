import React from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import ScrollToTop from "../components/ScrollToTop"
import FooterComponent from "../components/FooterComponent"

const PrivacyPolicy = () => {
  return (
    <>
      <NavbarComponent />
      <ScrollToTop />
      <div className="privacy-policy w-100 min-vh-100">
        <Helmet>
          <title>Kebijakan Privasi - Digi Web Creative</title>
        </Helmet>
        <Container>
          <Row>
            <Col>
              <h3>Kebijakan Privasi</h3>
              <p className="mt-4">
                Dengan memilih untuk menggunakan Layanan kami, Anda secara
                otomatis memberikan persetujuan untuk pengumpulan dan penggunaan
                informasi Anda sesuai dengan Kebijakan Privasi kami. Kami
                menggunakan informasi pribadi yang kami kumpulkan untuk tujuan
                penyempurnaan Layanan, dan kami menjamin bahwa informasi Anda
                tidak akan digunakan atau dibagikan kepada pihak ketiga, kecuali
                seperti yang dijelaskan dalam Kebijakan Privasi kami.
              </p>
              <p>
                Istilah yang digunakan dalam Kebijakan Privasi ini memiliki arti
                yang sama seperti dalam Syarat dan Ketentuan kami, kecuali
                ketentuan lain dalam Kebijakan Privasi ini.
              </p>
              <h5 className="mt-5">Pengumpulan dan Pemanfaatan Informasi</h5>
              <p className="mt-4">
                Demi meningkatkan pengalaman penggunaan Layanan kami, mungkin
                kami meminta Anda untuk memberikan informasi pengenal pribadi
                tertentu, seperti nama, nomor telepon, dan alamat email. Data
                yang kami himpun akan digunakan untuk mempermudah komunikasi
                dengan Anda.
              </p>
              <h5 className="mt-5">Pemberi Layanan Jasa</h5>
              <p className="mt-4">
                Kami mempertimbangkan bekerjasama dengan perusahaan dan individu
                pihak ketiga karena pertimbangan-pertimbangan berikut:
              </p>
              <ul className="mt-4 mb-4">
                <li>Membantu dalam penyelenggaraan Layanan kami;</li>
                <li>Menyediakan Layanan atas nama kami;</li>
                <li>Melakukan tugas terkait Layanan;</li>
                <li>
                  Membantu dan Mendukung analisis penggunaan Layanan kami.
                </li>
              </ul>
              <p>
                Untuk transparansi kepada pengguna Layanan kami, pihak ketiga
                diberikan hak akses ke Informasi Pribadi Anda. Tindakan ini
                dilakukan demi kelancaran tugas yang kami berikan kepada mereka
                atas nama kami. Tetapi, mereka tetap tunduk pada kewajiban untuk
                tidak mengungkap atau memanfaatkan informasi tersebut untuk
                tujuan lain.
              </p>
              <h5 className="mt-5">Kebijakan Privasi yang Diperbarui</h5>
              <p className="mt-4">
                Kami mempunyai hak untuk memperbarui Kebijakan Privasi kami
                secara berkala. Oleh karena itu, kami sangat menyarankan Anda
                untuk secara rutin memeriksa halaman ini untuk setiap perubahan
                yang mungkin terjadi. Setiap kali ada perubahan, kami akan
                memberitahu Anda dengan mengunggah Kebijakan Privasi yang baru
                di halaman ini. Perubahan-perubahan tersebut akan berlaku segera
                begitu dipublikasikan di halaman ini.
              </p>
              <h5 className="mt-5">Kontak Kami</h5>
              <p className="mt-4">
                Kami ingin mendengar dari Anda jika Anda memiliki pertanyaan
                atau saran mengenai Kebijakan Privasi kami, Jangan ragu untuk
                menghubungi Kontak kami yang tertera.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  )
}

export default PrivacyPolicy
