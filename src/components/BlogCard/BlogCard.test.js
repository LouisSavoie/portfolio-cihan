import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import BlogCard from './BlogCard'

const blogItem = {
  title: 'Failed to fetch blog posts :(',
  link: 'https://medium.com/@thelousavoie',
  thumbnail: './img/logo512.png',
  content: 'The RSS feed for thelousavoie is temporarily unavailable. Please check back again later! Sorry, for the inconvenience.',
  pubDate: '0000-00-00 00:00:00'
}

afterEach(() => {
  cleanup()
})

test('should render BlogCard', () => {
  render(<BlogCard blogItem={blogItem} />)
  const BlogCardElement = screen.getByTestId('blog-card')
  expect(BlogCardElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<BlogCard blogItem={blogItem} />).toJSON()
  expect(tree).toMatchSnapshot()
})
