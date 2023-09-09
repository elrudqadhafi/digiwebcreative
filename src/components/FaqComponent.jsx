import React from "react"
import { Accordion, Col, Container, Row } from "react-bootstrap"
import { faq } from "../data"

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h3 className="text-center">Pertanyaan Populer</h3>
          </Col>
        </Row>
        <Row className="row-cols-lg-1 row-cols-1 gap-2 pt-3">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion>
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default FaqComponent
