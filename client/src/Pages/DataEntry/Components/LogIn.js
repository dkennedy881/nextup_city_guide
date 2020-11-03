import React, { useState } from "react";
import "../style.css";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

const Login = ({ setIsLoggedIn, setLoggedInUser }) => {
  const [validated, setValidated] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUser = () => {
    return Axios.post(
      `https://webhooks.mongodb-realm.com/api/client/v2.0/app/nextup-ssnrm/service/loginDataloader/incoming_webhook/webhook0`,
      {
        username,
        password,
      }
    );
  };

  const validateUser = async () => {
    const res = await getUser();
    console.log(res.data);
    setIsLoading(false);
    if (!res.data) {
      setIsUser(false);
    } else {
      setIsUser(true);
      setValidated(true);
      setLoggedInUser(res.data);
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLoading(true);
    validateUser();
  };

  return (
    <div className="container-fluid" id="loginContainer">
      <div className="row">
        <div className="col-md-12" id="loginFormContent">
          <div id="loginForm">
            <Form validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>
                  <h3> Log in</h3>
                </Form.Label>
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter username"
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Username provided by <a>admin@nextup.city</a>
                </Form.Text>
              </Form.Group>
              <Form.Group
                controlId="formPassword"
                style={{ minHeight: "95px" }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {!isUser ? (
                  <span style={{ color: "red" }}>
                    Username or password incorrect
                  </span>
                ) : null}
              </Form.Group>

              <div id="loginBtnDiv">
                {!isLoading ? (
                  <Button variant="secondary" type="submit">
                    login
                  </Button>
                ) : (
                  <Button variant="warning" type="submit">
                    verifying
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
