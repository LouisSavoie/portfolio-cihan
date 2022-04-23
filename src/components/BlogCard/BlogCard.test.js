import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import BlogCard from './BlogCard'

afterEach(() => {
  cleanup()
})

test('should render BlogCard', () => {
  render(<BlogCard />)
  const BlogCardElement = screen.getByTestId('blog-card')
  expect(BlogCardElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<BlogCard />).toJSON()
  expect(tree).toMatchSnapshot()
})