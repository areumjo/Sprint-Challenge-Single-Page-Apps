import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function LocationCard (props) {
  // name, type, dimension, residents
  //console.log(props)
  return (
    <div>
      {props.data.map(d => {
        return (
          <Card>
          <Card.Content>
            <Card.Header>{d.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{d.species} {d.dimension}</span>
            </Card.Meta>
            <Card.Description>
              Type: {d.type}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/characters">
              <Icon name='user' />
                {d.residents.length} residents
            </Link>
          </Card.Content>
          </Card>
        )
      })}
  </div>
  )
}
