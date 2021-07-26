import React from 'react'

export default function Plant(props) {
    const { plantData } = props

    if(!plantData) {
        return <h3>Working to fetch your plants...</h3>
    }

    return (
        <div>
            <img src={plantData.image} alt={plantData.alt}/>
            <h3>{plantData.nickname}</h3>
            <h4>{plantData.species}</h4>
            <p>Watering Schedule : {plantData.h2oFrequency}</p>
        </div>
    )
}