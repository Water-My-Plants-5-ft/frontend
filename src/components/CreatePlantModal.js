import React from 'react'
import Modal from 'react-modal'

export default function CreatePlantModal(props) {
    const { values, change, submit, disabled, errors, modalIsOpen, closeModal } = props
    
    // Modal States
    
    Modal.setAppElement('#root');

    // Modal Event Handlers
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        closeModal()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    // Modal HTML Return
    return(
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
                            value={values.nickname}
                            onChange={onChange}
                            name='nickname'
                            type='text'
                            id='nickname-input'
                        />
                    </label>
                    <p>{errors.nickname}</p>
                </div>
                <div>
                    <label>Plant Species:&nbsp;
                        <input
                            value={values.species}
                            onChange={onChange}
                            name='species'
                            type='text'
                            id='species-input'
                        />
                    </label>
                    <p>{errors.species}</p>
                </div>
                <div>
                    <label>Watering Schedule:&nbsp;
                        <input
                            value={values.h2oFrequency}
                            onChange={onChange}
                            name='h2oFrequency'
                            type='text'
                            id='h2oFrequency-input'
                        />
                    </label>
                    <p>{errors.h2oFrequency}</p>
                </div>
                <div>
                    <label>Upload A Picture of Your Plant:&nbsp;
                        <input
                            value={values.image}
                            onChange={onChange}
                            name='image'
                            type='file'
                            id='image-input'
                        />
                    </label>
                </div>
                <button disabled={disabled}>Submit New Plant</button>
            </form>
            <button onClick={closeModal}>Close</button>            
            </Modal>
    )

}  