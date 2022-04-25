import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import App from './App'

afterEach(() => {
  cleanup()
})

test('should render App', () => {
  render(<App />)
  const AppElement = screen.getByTestId('app')
  expect(AppElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
