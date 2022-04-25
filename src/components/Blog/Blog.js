import React, { useState, useEffect } from 'react'
import BlogCard from '../BlogCard/BlogCard'

const Blog = () => {
  const rss2json = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40' + 'thelousavoie' // TODO: replace string with prop from info.json data
  const [blogData, setBlogData] = useState([])

  const getBlogData = () => {
    fetch(rss2json)
      .then(response => response.json())
      .then(responseJson => { setBlogData(responseJson) })
  }

  useEffect(() => {
    getBlogData()
  }, [rss2json])

  console.log(blogData)

  return (
    <div data-testid="blog">
      <BlogCard />
    </div>
  )
}

export default Blog
