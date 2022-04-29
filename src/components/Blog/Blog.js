import React, { useState, useEffect } from 'react'
import BlogCard from '../BlogCard/BlogCard'

const Blog = ({ blogName }) => {
  const rss2json = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40' + blogName
  const errorCardData = {
    title: 'Failed to fetch blog posts :(',
    link: `https://medium.com/@${blogName}`,
    thumbnail: './img/logo512.png',
    content: `The RSS feed for ${blogName} is temporarily unavailable. Please check back again later! Sorry, for the inconvenience.`,
    pubDate: '0000-00-00 00:00:00'
  }
  const [blogData, setBlogData] = useState([])

  const getBlogData = () => {
    fetch(rss2json)
      .then(response => response.json())
      .then(responseJson => { setBlogData(responseJson) })
  }

  useEffect(() => {
    getBlogData()
  }, [rss2json])

  const displayBlogCards = () => {
    if (blogData.status === 'error') {
      return <BlogCard blogItem={errorCardData} />
    }
    return blogData.items && blogData.items.map(blogItem => {
      // Medium stores Blogs and Responses in the same array. Blogs have categories but Responses do not. So we check for categories length to filter them.
      return blogItem.categories.length > 0 && <BlogCard key={blogItem.pubDate} blogItem={blogItem} />
    })
  }

  return (
    <div data-testid="blog">
      <h2>Blog</h2>
      {displayBlogCards()}
    </div>
  )
}

export default Blog
