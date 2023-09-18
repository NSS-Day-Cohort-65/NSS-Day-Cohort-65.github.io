import { useState } from "react";
import StudentImage from "./StudentImage";
import StudentModal from "./StudentModal";

function StudentCard({ student }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="column is-one-third-widescreen is-half-tablet">
      <div className="card">
        <header className="card-header is-flex-direction-column">
          <div className="card-image pt-5  is-flex-grow-1">
            <StudentImage image={student.circle_image} className="m-auto" />
          </div>
          <p className="card-header-title is-justify-content-center is-flex-grow-1">
            {student?.first_name} {student?.last_name}
          </p>
        </header>
        <div className="card-content">
          <div className="content is-family-secondary">
            {student.favorite_quote}
          </div>
        </div>
        <footer className="card-footer">
          <button
            type="button"
            className="card-footer-item button is-ghost"
            onClick={() => setShowModal(true)}
          >
            View More
          </button>
          <a
            href={`https://github.com/${student.github_handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item button is-ghost"
          >
            Github
          </a>
          <a
            href={`https://www.linkedin.com/in/${student.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item button is-ghost"
          >
            LinkedIn
          </a>
        </footer>
        {
          showModal ? <StudentModal student={student} hideModal={() => setShowModal(false)} /> : null
        }

      </div>
    </div>
  )
}

export default StudentCard;
