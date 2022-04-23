import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Project from './Project'

afterEach(() => {
  cleanup()
})

test('should render Project', () => {
  render(<Project />)
  const ProjectElement = screen.getByTestId('project')
  expect(ProjectElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Project />).toJSON()
  expect(tree).toMatchSnapshot()
})
