import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Project from '../Project/Project'

const Projects = ({ projects }) => {
  const displayProjects = () => {
    return projects?.map(project => {
      return <Project key={project.name} project={project} />
    })
  }

  return (
    <Container className="content-container" data-testid="projects">
      <Row className="justify-content-center">
        <h2>Projects</h2>
        {displayProjects()}
      </Row>
    </Container>
  )
}

export default Projects
