import React, { useState } from "react";
import "../style.css";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { useAsync } from "react-async";

const sendEmail = async ([name, email, message]) => {
  let { data: success } = await Axios.post(
    "https://webhooks.mongodb-realm.com/api/client/v2.0/app/nextup-ssnrm/service/sendMessage/incoming_webhook/webhook0",
    {
      name: String(name),
      email: String(email),
      message: String(message),
    }
  );

  return success;
};

const Section3 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmailController = useAsync({
    deferFn: sendEmail,
    onResolve: () => {
      setName("");
      setEmail("");
      setMessage("");
      setSuccessMessage("Thank you for your submission");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    },
  });

  return (
    <div className="container-fluid Section" id="Section1Container">
      <div className="row padded">
        <div className="col-md-12" id="Section1TextContainer">
          <h2 id="Section3Title">
            We're in this together. Connect with us to find out more.
          </h2>
          <Form id="messageFormContainer">
            <Form.Group controlId="formBusinessName">
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBusinessEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBusinessMessage">
              <Form.Control
                type="text"
                as={"textarea"}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              controlId=""
              style={{
                minHeight: "35px",
                textAlign: "center",
                color: "#5dbecb",
              }}
            >
              <Form.Label>{successMessage}</Form.Label>
            </Form.Group>
            <Form.Group id="formSubmitBtnContainer">
              <Button
                variant="light"
                id="formSubmitBtn"
                onClick={() => {
                  sendEmailController.run(name, email, message);
                }}
              >
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
