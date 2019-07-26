import React, { useState, useEffect } from "react";
import Axios from 'axios';

import { Card, Icon } from 'semantic-ui-react'

export default function Episodes() {
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
          console.log('episode:', response.data.results)
          const data = response.data.results;
          setData(data)
        })
        .catch(err => console.log("Episode API is down: ", err))
    }, [])
    return (
        <div>
            {data.map(d => {
                return (
                    <Card>
                    <Card.Content>
                        <Card.Header>{d.name}</Card.Header>
                        <Card.Meta>
                        <span className='date'>{d.species} {d.dimension}</span>
                        </Card.Meta>
                        <Card.Description>
                            {d.episode} {d.air_date}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                        <Icon name='user' />
                        Characters: {d.characters.length}
                        </a>
                    </Card.Content>
                    </Card>
                )
            })}
        </div>
    )
}