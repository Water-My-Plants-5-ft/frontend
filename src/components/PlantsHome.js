import axios from 'axios'
import { useEffect, useState } from 'react'
import Plant from './Plant'
import '../PlantsHome.css'

// sample myPlantList
const myPlantList=[
    {nickname: 'Plant1',
    species: 'Species1',
    h2oFrequency: 'Every Monday',
    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {nickname: 'Plant2',
    species: 'Species2',
    h2oFrequency: 'Every Tuesday',

    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {nickname: 'Plant3',
    species: 'Species3',
    h2oFrequency: 'Every Wednesday',

    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {nickname: 'Plant4',
    species: 'Species4',
    h2oFrequency: 'Every Thursday',

    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {nickname: 'Plant5',
    species: 'Species5',
    h2oFrequency: 'Every Friday',

    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'},
    {nickname: 'Plant6',
    species: 'Species6',
    h2oFrequency: 'Every Saturday',

    image: 'https://images.unsplash.com/photo-1528563351349-844bf0482bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'}
]

// End of sample MyPlantList
export default function PlantsHome(props) {
    

    return (
        <div class='plantsHome-container'>
            <h2>My Plants</h2>
            <div class='myPlants-container'>
                {myPlantList.map(plant => {
                    return (
                        <Plant key={plant.id} plantData={plant} />
                    )
                })}
            </div>
        </div>
    )
}