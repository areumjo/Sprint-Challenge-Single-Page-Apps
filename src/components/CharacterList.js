import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        console.log(response.data.results)
        const data = response.data.results;
        setData(data)
      })
      .catch(err => console.log("Character API is down: ", err))
  }, [])
  return <section className='character-list grid-view'>

      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {/* {data.map(d => {
        return (
          <div className="character-list" key={d.id}>
            <img src={d.image} alt="Rick-Morty fan page" />
            <h3>{d.name}</h3>
            <p>{d.species} {d.status}</p>
            <p>Location: {d.location.name}</p>
            <p>Origin: {d.origin.name}</p>
          </div>
        )
      })} */}
      <CharacterCard data={data}/>
    </section>

}
