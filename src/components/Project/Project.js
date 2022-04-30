import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'

const Project = ({ project }) => {
  const { name, picture, tech, about, repo, demo } = project

  const displayTech = () => {
    return tech.map(techItem => {
      return <Col className="col-4 py-1" key={techItem}><div className="tech-item">{techItem}</div></Col>
    })
  }

  const displayButtons = (dataValue, text) => {
    return dataValue !== '' && <Button variant="primary" size="lg" href={dataValue} target="_blank" rel="noopener noreferrer">{text}</Button>
  }

  return (
    <Card data-testid="project" style={{ width: '24rem', paddingBottom: '.5rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title as="h3" className="text-center">{name}</Card.Title>
        <Row className="py-1">
          {displayTech()}
        </Row>
        <Card.Text>{about}</Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-center">
        {displayButtons(repo, 'Repo')}
        {displayButtons(demo, 'Demo')}
      </div>
    </Card>
  )
}

export default Project
