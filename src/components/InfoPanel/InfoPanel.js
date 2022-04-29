import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const InfoPanel = ({ data }) => {
  const displayButtons = (dataValue, text) => {
    return dataValue !== '' && <Button size="lg" href={dataValue} target="_blank" rel="noopener noreferrer">{text}</Button>
  }

  return (
    <Card data-testid="info-panel" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.photo} />
      <Card.Body>
        <Card.Title as="h1">{data.name}</Card.Title>
        <Card.Title as="h3">{data.title}</Card.Title>
        {displayButtons(data.resume, 'Resume')}
        <Button size="lg" href={`mailto:${data.email}`}>Email</Button>
        {displayButtons(data.linkedin, 'LinkedIn')}
        {displayButtons(data.github, 'GitHub')}
        {displayButtons(data.leetcode, 'LeetCode')}
        {displayButtons(data.codewars, 'Codewars')}
        <Card.Text>{data.about}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default InfoPanel
