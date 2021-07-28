import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router";

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

const initialValue = {
  nickname: "",
  species: "",
  h2o_frequency: "",
};

//Component for owner to add an item
const EditPlant = () => {
  const { id } = useParams();
  const [item, setItem] = useState(initialValue);
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`plants/${id}`)
      .then((res) => {
        console.log("item edit response", res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //Change handler
  const onChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      nickname: item.nickname.trim(),
      species: item.species.trim(),

      h2o_frequency: item.h2o_frequency.trim(),
    };
    axiosWithAuth()
      .put(`plants/${id}`, newItem)
      .then((res) => {
        console.log(res);
        setItem(initialValue);
        history.push("/myplants");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <h3>Edit Plant</h3>
            <form onSubmit={submitHandler}>
              <label>
                Plant Name:
                <Input
                  name="nickname"
                  value={item.nickname}
                  onChange={onChange}
                />
              </label>
              <label>
                Species:
                <Input
                  name="species"
                  type="text"
                  value={item.species}
                  onChange={onChange}
                />
              </label>
              <br />
              <label>
                h2o_frequency:
                <Input
                  name="h2o_frequency"
                  type="text"
                  value={item.h2o_frequency}
                  onChange={onChange}
                />
              </label>
              <div>
                <Button
                  type="submit"
                  // disabled={!item.nickname || !item.species}
                >
                  Edit Plant
                </Button>
              </div>
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPlant;
