function ProjectCard({ project }) {
  return (
    <div className="media">
      <div className="media-content">
        <div className="content">
          <p className="is-family-secondary">
            <strong>
              {project.title}
            </strong>
            <br />
            {project.description}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" href={project.github_url}>
              <span className="icon is-medium"><i className="fab fa-md fa-github" /></span>
            </a>
            {
              project.deployed_url ?
                <a className="level-item" href={project.deployed_url}>
                  <span className="icon is-medium"><i className="fas fa-md fa-link" /></span>
                </a>
                : <></>
            }
          </div>
        </nav>
      </div>
    </div>
  )
}

export default ProjectCard;
