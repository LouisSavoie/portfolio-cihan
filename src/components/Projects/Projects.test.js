import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Projects from './Projects'

const projects = [
  {
    name: 'Bacon',
    picture: './img/bacon.png',
    tech: ['Short ribs', 'chuck', 'pastrami', 'corned beef', 'chicken'],
    about: 'Bacon ipsum dolor amet chislic ribeye drumstick buffalo jowl beef ribs cow bresaola pig brisket hamburger. Andouille picanha jerky cupim ground round filet mignon tenderloin sirloin venison ribeye turducken. Andouille tenderloin ground round pastrami rump pork chop, sausage buffalo porchetta kevin pancetta jerky hamburger. Shank pork beef, spare ribs tri-tip pork belly doner beef ribs strip steak meatball hamburger short loin jerky. Pork rump meatloaf frankfurter cow short loin drumstick venison tenderloin tail beef ribs. Ham alcatra chuck, boudin burgdoggen t-bone beef cow doner pastrami shoulder chicken drumstick capicola spare ribs.',
    repo: '',
    demo: ''
  },
  {
    name: 'Ipsum',
    picture: './img/ipsum.png',
    tech: ['t-bone', 'turkey', 'tri-tip'],
    about: 'Tongue turkey salami, pig tenderloin chislic rump pancetta ham hock venison pork chop swine shoulder. Doner fatback leberkas pork shankle short ribs turkey prosciutto porchetta strip steak alcatra. Shank flank pig short ribs pork belly. Pork chop ball tip filet mignon, porchetta shankle kielbasa shoulder short ribs pork belly prosciutto landjaeger tail chislic buffalo fatback. Pork chop strip steak hamburger picanha. Swine turkey strip steak, short loin spare ribs drumstick ground round leberkas. Kevin tail filet mignon leberkas jerky bacon meatball boudin prosciutto tongue t-bone.',
    repo: '',
    demo: ''
  },
  {
    name: 'Yum',
    picture: './img/yum.png',
    tech: ['rump', 'drumstick', 'brisket', 'sausage', 'ribeye'],
    about: 'Bacon beef ribs ball tip cupim rump pancetta, pork belly bresaola pork chop strip steak. Kevin short loin tail salami filet mignon ham hock, pig doner chislic. Picanha porchetta ground round brisket meatball. Leberkas jowl pork loin tri-tip ball tip hamburger. Beef meatloaf buffalo pastrami kielbasa leberkas ground round short ribs tri-tip pork belly venison bresaola salami.',
    repo: '',
    demo: ''
  }
]

afterEach(() => {
  cleanup()
})

test('should render Projects', () => {
  render(<Projects projects={projects} />)
  const ProjectsElement = screen.getByTestId('projects')
  expect(ProjectsElement).toBeInTheDocument()
})

test('matches snapshot', () => {
  const tree = renderer.create(<Projects projects={projects} />).toJSON()
  expect(tree).toMatchSnapshot()
})
