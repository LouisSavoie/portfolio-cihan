import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Info from './Info'

const data = {
  photo: './img/photo.png',
  name: 'Bacon Tester Ipsum',
  about: 'Prosciutto short loin filet mignon boudin, doner leberkas jerky bresaola sirloin tenderloin. Ham landjaeger doner, fatback tri-tip pork loin rump kevin venison. Jowl kielbasa frankfurter doner alcatra tenderloin, porchetta bresaola hamburger tail picanha meatball chislic shank. Burgdoggen meatloaf short ribs beef, shank pork pig fatback andouille meatball brisket pancetta strip steak. Burgdoggen shankle frankfurter pork loin tail beef kevin shoulder bacon landjaeger ham corned beef spare ribs.',
  resume: 'https://baconipsum.com/',
  email: 'thelousavoie@gmail.com',
  linkedin: 'https://www.linkedin.com/in/louis-savoie-6a70811b4/',
  github: 'https://github.com/LouisSavoie',
  leetcode: 'https://www.leetcode.com/lousavoie',
  codewars: 'https://www.codewars.com/users/LouisSavoie'
}

afterEach(() => {
  cleanup()
})

test('should render Info', () => {
  render(<Info data={data} />)
  const InfoElement = screen.getByTestId('info')
  expect(InfoElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Info data={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
