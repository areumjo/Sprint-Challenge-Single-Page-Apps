import React, { useEffect, useState } from 'react';
import Axios from 'axios';

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
  }, [])
  return <section className='character-list grid-view'>

      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {data.map(d => {
        return (
          <div className="character-list" key={d.id}>
            <img src={d.image} alt="Rick-Morty fan page" />
            <h3>{d.name}</h3>
            <h3>{d.status}</h3>
          </div>
        )
      })}
    </section>

}
