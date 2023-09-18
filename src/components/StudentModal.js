import ProjectCard from "./ProjectCard";
import StudentImage from "./StudentImage";

function StudentModal({ student, hideModal }) {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={hideModal}></div>
      <div className="modal-content">
        <article className="message is-primary">
          <div className="message-header">
            <h2 className="title has-text-white mb-0">{student.first_name} {student.last_name}</h2>
            <StudentImage image={student.circle_image} className="ml-auto" />
            <button className="delete is-align-self-flex-start" aria-label="delete" onClick={hideModal}></button>
          </div>
          <div className="tabs is-centered">
            <ul>
              <li >
                <a
                  href={`https://github.com/${student.github_handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href={`https://www.linkedin.com/in/${student.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              {
                student.resume_link
                  ? (
                    <li>
                      <a href={student.resume_link} target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                  ) : null
              }
              {
                student.podcast_link
                  ? (
                    <li>
                      <a href={student.podcast_link} target="_blank" rel="noopener noreferrer">Podcast</a>
                    </li>
                  ) : null
              }
            </ul>
          </div>
          <div className="message-body">
            <div className="columns">
              <div className="column">
                <h4 className="subtitle">About Me</h4>
                <p className="is-family-secondary">{student.bio}</p>
              </div>
              <div className="column">
                <h4 className="subtitle">Projects</h4>
                {
                  student.projects?.map((project) => <ProjectCard project={project} key={`${student.student_id}-${project.id}`} />)
                }
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default StudentModal;
