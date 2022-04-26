import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Navbar from './Navbar'

const wrappedNavbar = () => {
  return (
    <Router>
      <Navbar name="Bacon Tester Ipsum" />
    </Router>
  )
}

afterEach(() => {
  cleanup()
})

test('should render Navbar', () => {
  render(wrappedNavbar())
  const NavbarElement = screen.getByTestId('navbar')
  expect(NavbarElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(wrappedNavbar()).toJSON()
  expect(tree).toMatchSnapshot()
})
