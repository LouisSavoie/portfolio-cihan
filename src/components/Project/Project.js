import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Project = ({ project }) => {
  const { name, picture, tech, about, repo, demo } = project

  const displayTech = () => {
    return tech.map(techItem => {
      return <ListGroup.Item key={techItem}>{techItem}</ListGroup.Item>
    })
  }

  const displayButtons = (dataValue, text) => {
    return dataValue !== '' && <Button variant="primary" size="lg" href={dataValue} target="_blank" rel="noopener noreferrer">{text}</Button>
  }

  return (
    <div data-testid="project">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup>
            {displayTech()}
          </ListGroup>
          <Card.Text>{about}</Card.Text>
          {displayButtons(repo, 'Repo')}
          {displayButtons(demo, 'Demo')}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Project
