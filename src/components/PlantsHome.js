import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { reach } from 'yup'
import formSchemaPlants from '../validation/newPlant-formSchema.js'
import Plant from './Plant'
import '../PlantsHome.css'

// sample myPlantList
const myPlantList=[
    {id: '0',
    nickname: 'Plant1',
    species: 'Species1',
    h2oFrequency: 'Every Monday',
    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {id: '1',
    nickname: 'Plant2',
    species: 'Species2',
    h2oFrequency: 'Every Tuesday',
    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {id: '2',
    nickname: 'Plant3',
    species: 'Species3',
    h2oFrequency: 'Every Wednesday',
    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {id: '3',
    nickname: 'Plant4',
    species: 'Species4',
    h2oFrequency: 'Every Thursday',
    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {id: '4',
    nickname: 'Plant5',
    species: 'Species5',
    h2oFrequency: 'Every Friday',
    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {id: '5',
    nickname: 'Plant6',
    species: 'Species6',
    h2oFrequency: 'Every Saturday',
    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'}
]

// End of sample MyPlantList
export default function PlantsHome(props) {
    // Modal States
    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)}
    const closeModal = () => {
        setIsOpen(false)}
    Modal.setAppElement('#root');
    
    // Form Initial States
    const initialNewPlantValues = {
        nickname: '',
        species: '',
        h2oFrequency: '',
        image: ''
     }
    const initialNewPlantErrors = {
        nickname: '',
        species: '',
        h2oFrequency: ''
    }
    const initialPlantList = []
    const initialDisabled = true

    // Form State Declarations
    const [plantList, setPlantList] = useState(initialPlantList)
    const [newPlantFormValues, setNewPlantFormValues] = useState(initialNewPlantValues)
    const [newPlantFormErrors, setNewPlantFormErrors] = useState(initialNewPlantErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    // Form Helper Functions

        /****PLACEHOLDER API USED HERE ****/ 
    const postNewPlant = newPlant => {
        axios.post('https://reqres.in/api/plants', newPlant)
          .then (res => {
            setPlantList([res.data, ...plantList])
            console.log('New Plant Creation Status:', res.status, 'New Plant Creation Values:', res.data)
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            setNewPlantFormValues(initialNewPlantValues)
          })
      }
    
    const validate = (name, value) => {
    reach(formSchemaPlants, name)
        .validate(value)
        .then(() => setNewPlantFormErrors({ ...newPlantFormErrors, [name]: '' }))
        .catch(err => setNewPlantFormErrors({ ...newPlantFormErrors, [name]: err.errors[0]}))
    }

    // Form Event Handlers

    const onChange = evt => {
        const { name, value} = evt.target
        inputChange(name, value)
    }
    const inputChange = (name, value) => {
        validate(name, value)
        setNewPlantFormValues({
          ...newPlantFormValues,
          [name]: value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmitNewPlant()
    }

    const formSubmitNewPlant = () => {
        const newPlant = {
            id: plantList.length,
            nickname: newPlantFormValues.nickname.trim(),
            species: newPlantFormValues.species.trim(),
            h2oFrequency: newPlantFormValues.h2oFrequency.trim(),
            image: newPlantFormValues.image,   
        }
        postNewPlant(newPlant)
    }

// Form Side Effects
    useEffect(() => {
        formSchemaPlants.isValid(newPlantFormValues).then(valid => setDisabled(!valid))
    }, [newPlantFormValues])
    


    return (
        <div class='plantsHome-container'>
            <div class='myPlants-header'>
                <h2>My Plants</h2>
                <button onClick={openModal}>Add a New Plant</button>
            </div>
            <div class='myPlants-container'>
                {myPlantList.map(plant => {
                    return (
                        <Plant key={plant.id} plantData={plant} />
                    )
                })}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                class='create-plant-modal'
                contentLabel='Add a New Plant Modal'

            >
                <h2>Create a New Plant</h2>
                <form className='create-new-plant-form' id='new-plant-form' onSubmit={onSubmit}>
                    <div>
                        <label>Plant Nickname:&nbsp;
                            <input
                                value={newPlantFormValues.nickname}
                                onChange={onChange}
                                name='nickname'
                                type='text'
                                id='nickname-input'
                            />
                        </label>
                        <p>{newPlantFormErrors.nickname}</p>
                    </div>
                    <div>
                        <label>Plant Species:&nbsp;
                            <input
                                value={newPlantFormValues.species}
                                onChange={onChange}
                                name='species'
                                type='text'
                                id='species-input'
                            />
                        </label>
                        <p>{newPlantFormErrors.species}</p>
                    </div>
                    <div>
                        <label>Watering Schedule:&nbsp;
                            <input
                                value={newPlantFormValues.h2oFrequency}
                                onChange={onChange}
                                name='h2oFrequency'
                                type='text'
                                id='h2oFrequency-input'
                            />
                        </label>
                        <p>{newPlantFormErrors.h2oFrequency}</p>
                    </div>
                    <div>
                        <label>Upload A Picture of Your Plant:&nbsp;
                            <input
                                value={newPlantFormValues.image}
                                onChange={onChange}
                                name='image'
                                type='file'
                                id='image-input'
                            />
                        </label>
                    </div>
                </form>
                
                <button disabled={disabled} >Submit New Plant</button>
                <button onClick={closeModal}>Close</button>            
            </Modal>
        </div>
    )
}