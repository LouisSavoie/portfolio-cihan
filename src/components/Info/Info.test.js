import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Info from './Info'

afterEach(() => {
  cleanup()
})

test('should render Info', () => {
  render(<Info />)
  const InfoElement = screen.getByTestId('info')
  expect(InfoElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Info />).toJSON()
  expect(tree).toMatchSnapshot()
})