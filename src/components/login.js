import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container, Button } from "reactstrap";

const Error = styled.h4`
  color: red;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [err, setError] = useState("");

  const history = useHistory();

  // const validateForm = () => {
  //   return userInfo.email.length > 0 && userInfo.password.length > 0;
  // };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://water-my-plantz.herokuapp.com/api/auth/login", userInfo)
      .then((res) => {
        console.log(res);
        console.log("successful", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user_id);
        history.push("/myplants");
        window.location.reload();
      })
      .catch((err) => {
        console.log("unsuccesful", err.response);
        setError(err.response);
      });
  }

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div class="plantsHome-container">
      <Container>
        <div className="Login">
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <Form.Group size="lg">
                <h2>Login</h2>
                <br />
                <br />
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  id="username-field"
                  placeholder="Username"
                  value={userInfo.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group size="lg">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="Password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <br />
              <br />

              <Button block size="lg" type="submit">
                Login
              </Button>
              <br />
              <br />
              <Error> {err}</Error>
            </form>
          </FormContainer>
        </div>
      </Container>
    </div>
  );
};

export default Login;
