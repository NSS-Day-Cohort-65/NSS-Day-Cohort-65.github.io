import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <section className="section is-medium" id="students">
      <div className="container">

        <div className="columns is-multiline">
          {
            students?.map((student) => (
              <StudentCard student={student} key={student.student_id} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default StudentList;
