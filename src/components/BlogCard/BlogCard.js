import React from 'react'
import Card from 'react-bootstrap/Card'

const BlogCard = () => {
  return (
    <a data-testid="blog-card" href="">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>Text</Card.Text>
          <Card.Text>Date</Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export default BlogCard