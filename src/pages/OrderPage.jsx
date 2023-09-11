import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"

import DataImg from "../assets/lengkapidata.png"
import { useLocation, useNavigate } from "react-router-dom"

const OrderPage = () => {
  const location = useLocation()
  const paket = location.state ? location.state.paket : null
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validasi formulir sebelum mengirim ke WhatsApp
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.address
    ) {
      alert("Lengkapi Dulu Ya Data Kamu😊")
      return
    }

    const nomorWhatsApp = "+6281364443540" // Gantilah dengan nomor WhatsApp Anda
    const nama = formData.fullName
    const harga = paket
      ? paket.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })
      : ""
    const pesan = `Halo, saya tertarik dengan paket ${
      paket ? paket.title : "Paket"
    } seharga ${harga}. Nama: ${nama}, HP: ${formData.phoneNumber}, Email: ${
      formData.email
    }, Alamat: ${formData.address}`

    // Membuat URL WhatsApp dengan data yang diisi
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(
      pesan
    )}`

    // Membuka URL WhatsApp di jendela baru
    window.location.href = urlWhatsApp
  }

  return (
    <div className="order-page w-100 min-vh-100">
      <Helmet>
        <title>Order - Web Pro Tech</title>
      </Helmet>
      <Container>
        <Row>
          <Col lg="8" xs="12">
            <div className="full-data">
              <img src={DataImg} alt="" />
              <div className="text-content">
                <h3>Lengkapi Data</h3>
                <p>
                  Lengkapi data diri Kamu untuk keperluan proses pembayaran dan
                  pengerjaan website. Jika kamu membeli domain .co.id maka
                  dibutuhkan tambahan data berupa NPWP Perusahaan, dan AKTA/SIUP
                  Perusahaan.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg="8" xs="12">
            <div className="form-data">
              <h4>Informasi Pribadi</h4>
              <form onSubmit={handleSubmit}>
                <label>Nama Lengkap</label>
                <input
                  required
                  placeholder="Masukkan Nama Lengkap"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                />
                <label>No Hp</label>
                <input
                  required
                  placeholder="Masukkan No Hp"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleFormChange}
                />
                <label>Email</label>
                <input
                  required
                  placeholder="Masukkan Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
                <label>Alamat</label>
                <input
                  required
                  placeholder="Masukkan Alamat"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                />
              </form>
            </div>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-4">
            <div className="ringkasan">
              <h4>Ringkasan Pemesanan</h4>
              {paket ? (
                <div>
                  <h5>
                    Jenis Paket <span>{paket.title}</span>
                  </h5>
                  <h5 className="mt-4">
                    Harga
                    <span>
                      {paket.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                  </h5>

                  <hr />
                  <h5 className="mt-4">
                    Total Biaya :
                    <span>
                      {paket.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                  </h5>
                </div>
              ) : (
                <p>Anda belum memilih paket.</p>
              )}
              <button
                className="lanjut-bayar"
                type="button"
                onClick={handleSubmit}
              >
                LANJUTKAN
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="m-auto pt-5">
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
  )
}

export default OrderPage
