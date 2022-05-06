import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer data-testid="footer">
      <Container className="p-3 text-center">
        <span className="p-auto">© 2022-present. All rights Reserved.</span>
      </Container>
    </footer>
  )
}

export default Footer
