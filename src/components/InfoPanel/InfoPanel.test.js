import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import InfoPanel from './InfoPanel'

afterEach(() => {
  cleanup()
})

test('should render InfoPanel', () => {
  render(<InfoPanel />)
  const InfoPanelElement = screen.getByTestId('info-panel')
  expect(InfoPanelElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<InfoPanel />).toJSON()
  expect(tree).toMatchSnapshot()
})
