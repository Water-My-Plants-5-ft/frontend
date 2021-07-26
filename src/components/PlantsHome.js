import axios from 'axios'
import { useEffect, useState } from 'react'

// sample myPlantList
myPlantList=[
    {nickname: Plant1}
    {}
    {}
    {}
]

// End of sample MyPlantList
export default function PlantsHome(props) {
    

    return (
        <div class='myPlants-container'>
            <h2>My Plants</h2>
            {myPlantList.map(plant => {
                return (
                    <Plant key={plant.id} plantData={plant} />
        )
      })}

        </div>
    )
}