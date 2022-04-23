import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Navbar from './Navbar'

afterEach(() => {
  cleanup()
})

test('should render Navbar', () => {
  render(<Navbar />)
  const NavbarElement = screen.getByTestId('navbar')
  expect(NavbarElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON()
  expect(tree).toMatchSnapshot()
})
