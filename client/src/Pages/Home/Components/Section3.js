import React from "react";
import "../style.css";
import { Form, Button } from "react-bootstrap";

const Section3 = () => {
  return (
    <div className="container-fluid Section" id="Section1Container">
      <div className="row padded">
        <div className="col-md-12" id="Section1TextContainer">
          <h2 id="Section3Title">
            We're in this together. Connect with us to find out more.
          </h2>
          <Form id="messageFormContainer">
            <Form.Group controlId="formBusinessName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBusinessEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBusinessMessage">
              <Form.Control type="text" as={"textarea"} />
            </Form.Group>
            <Form.Group id="formSubmitBtnContainer">
              <Button variant="light" id="formSubmitBtn">
                Send
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export { Section3 };
