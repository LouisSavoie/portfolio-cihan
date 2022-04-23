import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Blog from './Blog'

afterEach(() => {
  cleanup()
})

test('should render Blog', () => {
  render(<Blog />)
  const BlogElement = screen.getByTestId('blog')
  expect(BlogElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Blog />).toJSON()
  expect(tree).toMatchSnapshot()
})