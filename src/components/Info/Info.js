import React from 'react'
import InfoPanel from '../InfoPanel/InfoPanel'
import { Container } from 'react-bootstrap'

const Info = ({ data }) => {
  return (
    <Container className="content-container" data-testid="info">
      <h2>Info</h2>
      <InfoPanel data={data} />
    </Container>
  )
}

export default Info
