import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import StudentManagement from "./StudentManagement";
import CourseDashboard from "./CourseDashboard";
import AttendanceSystem from "./AttendanceSystem";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              students={students}
              setStudents={setStudents}
            />
          }
        />

        <Route
          path="/students"
          element={<StudentManagement students={students} />}
        />

        <Route
          path="/courses"
          element={<CourseDashboard students={students} />}
        />

        <Route
          path="/attendance"
          element={<AttendanceSystem students={students} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;