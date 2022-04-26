import React from 'react'
import Card from 'react-bootstrap/Card'

const BlogCard = ({ blogItem }) => {
  const { title, link, thumbnail, content, pubDate } = blogItem

  function cleanTitle (checkTitle) {
    checkTitle = checkTitle.replace('amp;', '')
    return checkTitle
  }

  function truncateText (text, start, len) {
    return text.length > len ? text.slice(start, len) : text
  }

  function toText (block) {
    if (block.includes('<p>')) {
      const tag = document.createElement('div')
      tag.innerHTML = block
      block = tag.innerText
      return block
    }
    return block
  }

  function convertDate (date) {
    const dateArray = date.slice(0, 10).split('-')
    const year = dateArray.shift()
    dateArray.push(year)
    return `Published: ${dateArray.join('/')}`
  }

  return (
    <a data-testid="blog-card" href={`${link}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${thumbnail}`} alt={truncateText(cleanTitle(title), 0, 60)} />
        <Card.Body>
          <Card.Title>{truncateText(cleanTitle(title), 0, 60)}</Card.Title>
          <Card.Text>{truncateText(toText(content), 0, 300) + '...'}</Card.Text>
          <Card.Text>{convertDate(pubDate)}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export default BlogCard
