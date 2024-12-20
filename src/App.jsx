import React, { useState, useEffect } from 'react';
import { getStudents } from './getStudents';
import StudentTable from './components/StudentTable';
import StudentCard from './components/StudentCard';
import Pagination from './components/Pagination';

const App = () => {
  const [students, setStudents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getStudents(10, pageNumber).then(setStudents);
  }, [pageNumber]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-red-600 text-center bg-green-300 p-8">Student Management Page</h1>
      {isMobile ? (
        <div>
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      ) : (
        <StudentTable students={students} />
      )}
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={Math.ceil(20 / 10)} // Adjust the total pages based on student data
      />
    </div>
  );
};

export default App;
