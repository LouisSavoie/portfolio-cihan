import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Projects from './Projects'

afterEach(() => {
  cleanup()
})

test('should render Projects', () => {
  render(<Projects />)
  const ProjectsElement = screen.getByTestId('projects')
  expect(ProjectsElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Projects />).toJSON()
  expect(tree).toMatchSnapshot()
})
