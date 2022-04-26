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
      {displayProjects()}
    </div>
  )
}

export default Projects
