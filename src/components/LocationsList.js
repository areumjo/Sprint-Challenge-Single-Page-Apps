import React, { useEffect, useState } from 'react';
import Axios from 'axios';


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
    }, [])
    return (
        <div>
            {data.map(d => {
                return (
                    <div className="character-list" key={d.id}>
                        <p>{d.species} {d.dimension}</p>
                        <p>{d.name}</p>
                        <p>type: {d.type}</p>
                        <h3>{d.residents.length}</h3>
                    </div>
                )
            })}
        </div>
    )
}
