import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios
        .get(`https://rickandmortyapi.com/api/location`)
        .then(response => {
          console.log('location:', response.data.results)
          const data = response.data.results;
          setData(data)
        })
        .catch(err => console.log("Location API is down: ", err))
    }, [])
    return (
        <section className='character-list grid-view'>
          <LocationCard data={data}/>
        </section>
        
    )
}
