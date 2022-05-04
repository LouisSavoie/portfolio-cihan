import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Footer from './Footer'

afterEach(() => {
  cleanup()
})

test('should render Footer', () => {
  render(<Footer />)
  const FooterElement = screen.getByTestId('footer')
  expect(FooterElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})
