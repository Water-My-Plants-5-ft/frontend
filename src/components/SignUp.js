import React, { useState } from "react";
// import * as yup from "yup";
// import schema from "../Components/validation/registrationSchema.js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-top: 150px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const SignupPage = () => {
  const initialFormValues = {
    username: "",
    password: "",
    phone_number: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  // const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://water-my-plantz.herokuapp.com/api/auth/register",
        formValues
      )
      .then((res) => {
        console.log(res);
        // localStorage.setItem("token", res.data.token);
        history.push("/login");
      })
      .catch((err) => console.log(err));
    // setSubmissionErrors(err.response.data.message));
    setFormValues(initialFormValues);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <div className="edit-account-home-container">
      <div className="edit-account-container1">
        <div className="edit-account-container2">
          <div className="signup-form">
            <h2>Create an account, then sign in!</h2>
            <br />
            <br />

            <div>
              <form onSubmit={onSubmit}>
                <div>
                  <Input
                    value={formValues.username}
                    onChange={onChange}
                    name="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div>
                  <Input
                    value={formValues.phone_number}
                    onChange={onChange}
                    name="phone_number"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <Input
                    value={formValues.password}
                    onChange={onChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div></div>
                <Button type="submit">Sign Up!</Button>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SignupPage;
