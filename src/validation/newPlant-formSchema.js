import * as yup from 'yup'

const formSchemaPlants = yup.object().shape({
    nickname: yup
        .string()
        .trim()
        .required('nickname is required')
        .min(2, 'nickname must be at least 2 characters'),
    species: yup
        .string()
        .trim()
        .required('name is required')
        .min(4, 'species must be at least 4 characters'),
    h2oFrequency: yup
        .string()
        .trim()
        .required('watering schedule is required')
        .min(4, 'watering schedule must be at least 4 characters'),
    image: yup.string()
        .oneOf(['plant1', 'plant2', 'plant3', 'plant4', 'plant5', 'plant6', 'plant7', 'plant8', 'plant9', 'plant10', 'plant11', 'plant12'], 'default plant image is required')
})

export default formSchemaPlants