import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Info = () => {
  return (
    <Card data-testid="info-panel" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Button variant="primary" size="lg">Button</Button>
        <Button variant="primary" size="lg">Button</Button>
        <Button variant="primary" size="lg">Button</Button>
        <Button variant="primary" size="lg">Button</Button>
      </Card.Body>
    </Card>
  )
}

export default Info