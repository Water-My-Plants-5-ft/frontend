import React, { useState } from "react";
import Modal from "react-modal";
import "../CreatePlantModal.css";
// import styled from "styled-components";
// import { Container, Row, Col, Button } from "reactstrap";

import { axiosWithAuth } from "../utils/axiosWithAuth";

// import { useHistory } from "react-router";
import plant1 from "../assets/newplantoptions/plant1.jpg";
import plant2 from "../assets/newplantoptions/plant2.jpg";
import plant3 from "../assets/newplantoptions/plant3.jpg";
import plant4 from "../assets/newplantoptions/plant4.jpg";
import plant5 from "../assets/newplantoptions/plant5.jpg";
import plant6 from "../assets/newplantoptions/plant6.jpg";
import plant7 from "../assets/newplantoptions/plant7.jpg";
import plant8 from "../assets/newplantoptions/plant8.jpg";
import plant9 from "../assets/newplantoptions/plant9.jpg";
import plant10 from "../assets/newplantoptions/plant10.jpg";
import plant11 from "../assets/newplantoptions/plant11.jpg";
import plant12 from "../assets/newplantoptions/plant12.jpg";

const userID = window.localStorage.getItem("id");
const initialValue = {
  nickname: "",
  species: "",
  h2o_frequency: "",
};

export default function CreatePlantModal(props) {
  const { change, errors, modalIsOpen, closeModal } = props;

  // Modal States
  const [item, setItem] = useState(initialValue);
  // const history = useHistory();

  Modal.setAppElement("#root");

  // Modal Event Handlers
  const onSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post(`/users/${userID}/plants`, item)
      .then((res) => {
        console.log("New item added");
        console.log(item);
        // alert("New Plant Added ");

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    setItem(initialValue);
  };
  const inputChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });

    //validateItem(name, item[name]);
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  // Modal HTML Return
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      class="create-plant-modal"
      contentLabel="Add a New Plant Modal"
    >
      <h2>Create a New Plant</h2>
      <form
        className="create-new-plant-form"
        id="new-plant-form"
        onSubmit={onSubmit}
      >
        <div>
          <label>
            Plant Nickname:&nbsp;
            <input
              value={item.nickname}
              onChange={inputChange}
              name="nickname"
              type="text"
              id="nickname-input"
            />
          </label>
          <p>{errors.nickname}</p>
        </div>
        <div>
          <label>
            Plant Species:&nbsp;
            <input
              value={item.species}
              onChange={inputChange}
              name="species"
              type="text"
              id="species-input"
            />
          </label>
          <p>{errors.species}</p>
        </div>
        <div>
          <label>
            Watering Schedule:&nbsp;
            <input
              value={item.h2o_frequency}
              onChange={inputChange}
              name="h2o_frequency"
              type="text"
              id="h2o_frequency-input"
            />
          </label>
          <p>{errors.h2o_frequency}</p>
        </div>
        <div>
          <p>Choose a Default Picture for Your Plant:&nbsp;</p>
          {errors.image}
          <div className="plantPicOptions-Container">
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant1}
                onChange={inputChange}
                checked={item.image === plant1}
                id="plant1"
              />
              <label for="plant1" id="plantPic1">
                <img
                  src={plant1}
                  alt="plant1"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant2}
                onChange={inputChange}
                checked={item.image === plant2}
                id="plant2"
              />
              <label for="plant2" id="plantPic2">
                <img
                  src={plant2}
                  alt="plant2"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant3}
                onChange={inputChange}
                checked={item.image === plant3}
                id="plant3"
              />
              <label for="plant3" id="plantPic3">
                <img
                  src={plant3}
                  alt="plant3"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant4}
                onChange={inputChange}
                checked={item.image === plant4}
                id="plant4"
              />
              <label for="plant4" id="plantPic4">
                <img
                  src={plant4}
                  alt="plant4"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant5}
                onChange={onChange}
                checked={item.image === plant5}
                id="plant5"
              />
              <label for="plant5" id="plantPic5">
                <img
                  src={plant5}
                  alt="plant5"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant6}
                onChange={onChange}
                checked={item.image === plant6}
                id="plant6"
              />
              <label for="plant6" id="plantPic6">
                <img
                  src={plant6}
                  alt="plant6"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant7}
                onChange={onChange}
                checked={item.image === plant7}
                id="plant7"
              />
              <label for="plant7" id="plantPic7">
                <img
                  src={plant7}
                  alt="plant7"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant8}
                onChange={onChange}
                checked={item.image === plant8}
                id="plant8"
              />
              <label for="plant8" id="plantPic8">
                <img
                  src={plant8}
                  alt="plant8"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant9}
                onChange={onChange}
                checked={item.image === plant9}
                id="plant9"
              />
              <label for="plant9" id="plantPic9">
                <img
                  src={plant9}
                  alt="plant9"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant10}
                onChange={onChange}
                checked={item.image === plant10}
                id="plant10"
              />
              <label for="plant10" id="plantPic10">
                <img
                  src={plant10}
                  alt="plant10"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant11}
                onChange={onChange}
                checked={item.image === plant11}
                id="plant11"
              />
              <label for="plant11" id="plantPic11">
                <img
                  src={plant11}
                  alt="plant11"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
            <div className="plantPicOption-Container">
              <input
                type="radio"
                name="image"
                value={plant12}
                onChange={onChange}
                checked={item.image === plant12}
                id="plant12"
              />
              <label for="plant12" id="plantPic12">
                <img
                  src={plant12}
                  alt="plant12"
                  className="plantPicOption-Image"
                ></img>
              </label>
            </div>
          </div>
        </div>
        <button>Submit New Plant</button>
      </form>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
