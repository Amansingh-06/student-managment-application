import React from 'react';

const StudentCard = ({ student }) => {
    return (
        <div className=" shadow-md rounded-lg p-4 mb-4 text-center bg-gray-400 ">
            <h3 className="text-lg font-bold bg-red-200">{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Marks: {student.marks}</p>
            <p>Roll Number: {student.rollNumber}</p>
        </div>
    );
};

export default StudentCard;
