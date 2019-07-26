import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


export default function CharacterCard (props) {
  console.log(props.data);
  return (
  //   {dataCard.data.map(d => {
  //     return (
  //       <div className="character-list" key={d.id}>
  //         <img src={d.image} alt="Rick-Morty fan page" />
  //         <h3>{d.name}</h3>
  //         <p>{d.species} {d.status}</p>
  //         <p>Location: {d.location.name}</p>
  //         <p>Origin: {d.origin.name}</p>
  //       </div>
  //     )
  //   })}
    <div>
      {props.data.map(d => {
        return (
          <Card>
          <Image src={d.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{d.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{d.species} {d.status}</span>
            </Card.Meta>
            <Card.Description>
              Location: {d.location.name}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
          </Card>
        )
      })}
  </div>
  )
}
