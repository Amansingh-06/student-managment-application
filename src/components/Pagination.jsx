import React from 'react';

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
    return (
        <div className="flex justify-center mt-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-l-lg disabled:bg-gray-300"
                onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                disabled={pageNumber === 1}
            >
                Previous
            </button>
            <span className="px-4 py-2 bg-gray-100">Page {pageNumber}</span>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg disabled:bg-gray-300"
                onClick={() => setPageNumber((prev) => Math.min(prev + 1, totalPages))}
                disabled={pageNumber === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;