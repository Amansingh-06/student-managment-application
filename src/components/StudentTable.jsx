import React from 'react';

const StudentTable = ({ students }) => {
    return (
        <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
                <tr className='bg-black text-white'>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Age</th>
                    <th className="border border-gray-300 p-2">Marks</th>
                    <th className="border border-gray-300 p-2">Roll Number</th>
                    <th className="border border-gray-300 p-2">Class</th>
                    <th className="border border-gray-300 p-2">City</th>
                    <th className="border border-gray-300 p-2">Attendance</th>
                </tr>
            </thead>
            <tbody className='text-white bg-gray-600'>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 p-2">{student.name}</td>
                        <td className="border border-gray-300 p-2">{student.age}</td>
                        <td className="border border-gray-300 p-2">{student.marks}</td>
                        <td className="border border-gray-300 p-2">{student.rollNumber}</td>
                        <td className="border border-gray-300 p-2">{student.class}</td>
                        <td className="border border-gray-300 p-2">{student.city}</td>
                        <td className="border border-gray-300 p-2">{student.attendance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentTable;