import { useState } from "react";

function Home({ students, setStudents }) {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      id: Date.now(),
      name,
      rollNo,
      course,
      attendance: Math.floor(Math.random() * 21) + 80,
    };

    setStudents([...students, student]);

    setName("");
    setRollNo("");
    setCourse("");
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Information System</h1>

      <p className="tagline">
        Manage student records, courses, and attendance efficiently.
      </p>

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
           <option value="COURSE">Select Course</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="AIDS">AIDS</option>
          <option value="EEE">EEE</option>
        </select>

        <button type="submit">Add Student</button>
      </form>

      <h2>Student List</h2>

      {filteredStudents.map((student) => (
        <div className="card" key={student.id}>
          <h3>{student.name}</h3>
          <p>Roll No: {student.rollNo}</p>
          <p>Course: {student.course}</p>
          <p>Attendance: {student.attendance}%</p>
        </div>
      ))}
    </div>
  );
}

export default Home;