import React from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"

import DataImg from "../assets/lengkapidata.png"
import { useLocation, useNavigate } from "react-router-dom"

const OrderPage = () => {
  const location = useLocation()
  const paket = location.state ? location.state.paket : null

  const navigate = useNavigate()

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
              <button className="lanjut-bayar">LANJUTKAN</button>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg="8" xs="12">
            <div className="form-data">
              <h4>Informasi Pribadi</h4>
              <form action="">
                <label>Nama Lengkap</label>
                <input
                  required=""
                  placeholder="Masukkan Nama Lengkap"
                  type="text"
                />
                <label>No Hp</label>
                <input
                  required=""
                  placeholder="Enter phone number"
                  type="telephone"
                />
                <label>Email</label>
                <input
                  required=""
                  placeholder="Masukkan Email"
                  type="telephone"
                />
                <label>Alamat</label>
                <input
                  required=""
                  placeholder="Masukkan Alamat"
                  type="telephone"
                  className="mb-5"
                />
              </form>
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
