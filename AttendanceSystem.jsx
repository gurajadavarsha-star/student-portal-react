function AttendanceSystem({ students }) {
  return (
    <div className="container">
      <h1>Attendance System</h1>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        students.map((student) => (
          <div className="card" key={student.id}>
            <h3>{student.name}</h3>
            <p>Roll No: {student.rollNo}</p>
            <p>Attendance Percentage: {student.attendance}%</p>
          </div>
        ))
      )}
    </div>
  );
}

export default AttendanceSystem;