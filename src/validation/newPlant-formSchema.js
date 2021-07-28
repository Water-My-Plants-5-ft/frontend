import * as yup from "yup";

const formSchemaPlants = yup.object().shape({
  nickname: yup
    .string()
    .trim()
    .required("nickname is required")
    .min(2, "nickname must be at least 2 characters"),
  species: yup
    .string()
    .trim()
    .required("name is required")
    .min(4, "species must be at least 4 characters"),
  h2o_frequency: yup
    .string()
    .trim()
    .required("watering schedule is required")
    .min(4, "watering schedule must be at least 4 characters"),
});

export default formSchemaPlants;
