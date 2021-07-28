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
        .oneOf(['/static/media/plant1.4a5b58b2.jpg', '/static/media/plant2.48d0e5c9.jpg', '/static/media/plant3.17f9ddb5.jpg', '/static/media/plant4.841daaff.jpg', '/static/media/plant5.6e9abcac.jpg', '/static/media/plant6.3b23ab0c.jpg', '/static/media/plant7.fc4abee8.jpg', '/static/media/plant8.326fe300.jpg', '/static/media/plant9.9d161008.jpg', '/static/media/plant10.c4419728.jpg', '/static/media/plant11.ffee195e.jpg', '/static/media/plant12.db89e1c3.jpg'], 'default plant image is required')
})

export default formSchemaPlants