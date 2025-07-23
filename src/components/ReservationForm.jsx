// Questo componente si occuperà di creare un form in react-bootstrap
// al fine di permettere ad un utente di prenotare un tavolo per tot persone,
// alla tot ora di tale giorno.
// Il contenuto del form verrà poi salvato in modo persistente tramite una
// chiamata API con metodo "POST".

// l'API con cui interagiamo oggi accetta oggetti creati in questo modo:
// "name" -> string
// "phone" -> string
// "numberOfPeople" -> number | string
// "smoking" -> boolean
// "dateTime" -> string
// "specialRequests" -> string | undefined

import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

class ReservationForm extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center">Prenota un tavolo!</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={8} lg={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control type="text" placeholder="Mario Bros" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Il tuo numero di telefono</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete</Form.Label>
                <Form.Select aria-label="number of people field">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tavolo fumatori" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quando e a che ora</Form.Label>
                <Form.Control
                  type="datetime-local"
                  min={new Date().toISOString().slice(0, -8)}
                  // creo una stringa a partire dalla data corrente
                  // e ci rimuovo gli ultimi 8 caratteri che simboleggiano
                  // i secondi e le informazioni di fuso orario, che non
                  // possono essere fornite come valore valido per "min"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie/Intolleranze/Bambini</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ReservationForm
