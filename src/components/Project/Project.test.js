import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Project from './Project'

const project = {
  name: 'Bacon',
  picture: './img/bacon.png',
  tech: [
    'Short ribs',
    'chuck',
    'pastrami',
    'corned beef',
    'chicken'
  ],
  about: 'Bacon ipsum dolor amet chislic ribeye drumstick buffalo jowl beef ribs cow bresaola pig brisket hamburger. Andouille picanha jerky cupim ground round filet mignon tenderloin sirloin venison ribeye turducken. Andouille tenderloin ground round pastrami rump pork chop, sausage buffalo porchetta kevin pancetta jerky hamburger. Shank pork beef, spare ribs tri-tip pork belly doner beef ribs strip steak meatball hamburger short loin jerky. Pork rump meatloaf frankfurter cow short loin drumstick venison tenderloin tail beef ribs. Ham alcatra chuck, boudin burgdoggen t-bone beef cow doner pastrami shoulder chicken drumstick capicola spare ribs.',
  repo: 'https://github.com/petenelson/bacon-ipsum',
  demo: 'https://baconipsum.com/'
}

afterEach(() => {
  cleanup()
})

test('should render Project', () => {
  render(<Project key={project.name} project={project} />)
  const ProjectElement = screen.getByTestId('project')
  expect(ProjectElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Project key={project.name} project={project} />).toJSON()
  expect(tree).toMatchSnapshot()
})
