import React from 'react'
import Project from '../Project/Project'

const Projects = ({ projects }) => {
  const displayProjects = () => {
    return projects?.map(project => {
      return <Project key={project.name} project={project} />
    })
  }

  return (
    <div data-testid="projects">
      <h2>Projects</h2>
      {displayProjects()}
    </div>
  )
}

export default Projects
