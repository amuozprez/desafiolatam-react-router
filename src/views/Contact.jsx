import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact-container text-center">
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ingresa tu descripción" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
