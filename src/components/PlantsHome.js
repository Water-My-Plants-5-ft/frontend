import axios from "axios";
import { useEffect, useState } from "react";
import { reach } from "yup";
import formSchemaPlants from "../validation/newPlant-formSchema.js";
import Plant from "./Plant";
import CreatePlantModal from "./CreatePlantModal";
import "../PlantsHome.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Container, Row, Col } from "reactstrap";
import { SpinnerDiv, Spinner } from "../styled-components/spinner";
import { useHistory } from "react-router";
import { Button } from "reactstrap";

// sample myPlantList

// End of sample MyPlantList
const userID = window.localStorage.getItem("id");
const initialValue = {
  nickname: "",
  species: "",
  h2o_frequency: "",
};
export default function PlantsHome(props) {
  const [allPlants, setAllPlants] = useState([]);
  const [item, setItem] = useState(initialValue);
  const history = useHistory();
  // Modal States
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // Form Initial States
  const initialNewPlantValues = {
    nickname: "",
    species: "",
    h2o_frequency: "",
    image: "",
  };
  const initialNewPlantErrors = {
    nickname: "",
    species: "",
    h2o_frequency: "",
    image: "",
  };
  const initialPlantList = [];
  const initialDisabled = true;

  // Form State Declarations
  const [plantList, setPlantList] = useState(initialPlantList);
  const [newPlantFormValues, setNewPlantFormValues] = useState(
    initialNewPlantValues
  );
  const [newPlantFormErrors, setNewPlantFormErrors] = useState(
    initialNewPlantErrors
  );
  const [disabled, setDisabled] = useState(initialDisabled);

  // Form Helper Functions
  useEffect(() => {
    axiosWithAuth()
      .get("/plants")
      .then((res) => {
        setAllPlants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /****PLACEHOLDER API USED HERE ****/
  const postNewPlant = (newPlant) => {
    axios
      .post(
        `https://water-my-plantz.herokuapp.com/api/users/${userID}/plants`,
        newPlant
      )
      .then((res) => {
        setPlantList([res.data, ...plantList]);
        console.log(
          "New Plant Creation Status:",
          res.status,
          "New Plant Creation Values:",
          res.data
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setNewPlantFormValues(initialNewPlantValues);
      });
  };

  const validate = (name, value) => {
    reach(formSchemaPlants, name)
      .validate(value)
      .then(() => setNewPlantFormErrors({ ...newPlantFormErrors, [name]: "" }))
      .catch((err) =>
        setNewPlantFormErrors({ ...newPlantFormErrors, [name]: err.errors[0] })
      );
  };

  // Form Event Handlers

  const inputChange = (name, value) => {
    validate(name, value);
    setNewPlantFormValues({
      ...newPlantFormValues,
      [name]: value,
    });
  };

  const formSubmitNewPlant = () => {
    const newPlant = {
      id: plantList.length,
      nickname: newPlantFormValues.nickname.trim(),
      species: newPlantFormValues.species.trim(),
      h2o_frequency: newPlantFormValues.h2o_frequency.trim(),
      image: newPlantFormValues.image.trim(),
    };
    postNewPlant(newPlant);
  };

  // Form Side Effects
  useEffect(() => {
    formSchemaPlants
      .isValid(newPlantFormValues)
      .then((valid) => setDisabled(!valid));
  }, [newPlantFormValues]);

  return (
    <div class="plantsHome-container">
      <div class="myPlants-header">
        <h2>My Plants</h2>
        <Button onClick={openModal}>Add a New Plant</Button>
      </div>
      <br />
      <br />
      <Row>
        <div class="myPlants-container">
          {allPlants.map((plant) => {
            return (
              <Col xs="12" sm="6" md="4" key={plant.id}>
                <Plant plant={plant} />
              </Col>
            );
          })}
        </div>
      </Row>
      <CreatePlantModal
        values={newPlantFormValues}
        change={inputChange}
        submit={formSubmitNewPlant}
        disabled={disabled}
        errors={newPlantFormErrors}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
