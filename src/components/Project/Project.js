import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Project = () => {
  return (
    <a data-testid="project" href="">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint, idx) => (
            <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
              <ListGroup.Item>Tech</ListGroup.Item>
              <ListGroup.Item>stack</ListGroup.Item>
              <ListGroup.Item>from</ListGroup.Item>
              <ListGroup.Item>info.json</ListGroup.Item>
              <ListGroup.Item>array</ListGroup.Item>
              <ListGroup.Item>renders</ListGroup.Item>
              <ListGroup.Item>here</ListGroup.Item>
            </ListGroup>
          ))}
          <Card.Text>Text</Card.Text>
          <Card.Text>About</Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export default Project
