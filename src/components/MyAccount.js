import React, { useState, useEffect } from "react";
import { Badge } from "reactstrap";
import { SpinnerDiv, Spinner } from "../styled-components/spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { useParams } from "react-router-dom";
// import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const userID = window.localStorage.getItem("id");

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 30%;
`;

const MyAccount = (props) => {
  // const { user_id } = useParams();

  // const [isFetching, setIsFetching] = useState(false);
  // const [id, setId] = useState(userID);
  const [formValues, setFormValues] = useState({
    username: "",
    user_id: "",
    phone_number: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then((res) => {
        console.log(res);

        setFormValues(res.data);
        // setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsFetching(false);
      });
  }, []);

  if (!formValues)
    return (
      <SpinnerDiv>
        <Spinner color="info" />
      </SpinnerDiv>
    );
  else
    return (
      <div class="plantsHome-container">
        <FormContainer>
          <div class="my-account-container1">
            <div class="my-account-container2">
              <h1>Account Info</h1>
              <br />
              {/* {setId(localStorage.getItem("id"))} */}
              {/* {setId(JSON.parse(localStorage.getItem("id")))} */}
              <br />
              <div>
                <br />
                <br />
                <div className="title">
                  <h2>Username: {formValues.username}</h2>
                </div>
                <br />
                {/* {setId(JSON.parse(userID))} */}
                <br />
                <div className="title">
                  <h2>Phone #: {formValues.phone_number}</h2>
                </div>
                <br />
                <br />
                <div className="title">
                  <h2>user id: {userID}</h2>
                </div>
                <br />
                <br />

                <h2>
                  Password: <Badge color="secondary"> 🤫 🤐 😶</Badge>
                </h2>
              </div>
            </div>
          </div>
        </FormContainer>
      </div>
    );
};

export default MyAccount;
