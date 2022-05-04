import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap'

const InfoPanel = ({ data }) => {
  const displayButtons = (dataValue, text) => {
    return dataValue !== '' && <Button href={dataValue} target="_blank" rel="noopener noreferrer">{text}</Button>
  }

  return (
    <Container className="mt-4 mb-4" data-testid="info-panel">
      <Card>
        <Row className="justify-content-center" xs="1" sm="1" md="2">
          <Col xs xxl="4" className="pe-md-0">
            <Card.Img src={data.photo} style={{ borderRadius: '1rem' }} />
            <Card.Body className="d-none d-md-flex d-lg-none justify-content-center flex-wrap">
              {displayButtons(data.resume, 'Resume')}
              <Button href={`mailto:${data.email}`}>Email</Button>
              {displayButtons(data.linkedin, 'LinkedIn')}
              {displayButtons(data.github, 'GitHub')}
              {displayButtons(data.leetcode, 'LeetCode')}
              {displayButtons(data.codewars, 'Codewars')}
            </Card.Body>
          </Col>
          <Col xs xxl="8" className="ps-md-0">
            <Card.Body>
              <Card.Title as="h1" className="text-center">{data.name}</Card.Title>
              <Card.Title as="h3" className="text-center">{data.title}</Card.Title>
              <div className="d-xs-flex d-sm-flex d-md-none d-lg-flex justify-content-center flex-wrap">
                {displayButtons(data.resume, 'Resume')}
                <Button href={`mailto:${data.email}`}>Email</Button>
                {displayButtons(data.linkedin, 'LinkedIn')}
                {displayButtons(data.github, 'GitHub')}
                {displayButtons(data.leetcode, 'LeetCode')}
                {displayButtons(data.codewars, 'Codewars')}
              </div>
              <Card.Text>{data.about}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default InfoPanel
