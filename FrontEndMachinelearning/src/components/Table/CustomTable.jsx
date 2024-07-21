import React, { useState } from 'react';

const Table = ({ columns, data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(0); // Reset to first page when changing rows per page
    };

    // Slice the data for the current page
    const paginatedData = data.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-center">
                        {columns.map((col, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, rowIndex) => (
                        <tr className="text-center"  key={rowIndex}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td className="px-6 py-4 text-white" key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

           
                <div >
                    <button onClick={() => handlePageChange(0)} disabled={currentPage === 0} style={{padding:20, color:'white'}}>
                        {'<<'}
                    </button>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0} style={{padding:20, color:'white'}}>
                        {'<'}
                    </button>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages - 1} style={{padding:20, color:'white'}}>
                        {'>'}
                    </button>
                    <button onClick={() => handlePageChange(totalPages - 1)} disabled={currentPage >= totalPages - 1} style={{padding:20, color:'white'}}>
                        {'>>'}
                    </button>
                </div>
                <div style={{color:'white'}}>
                    Page {currentPage + 1} of {totalPages}
                </div>
                <div>
                    <label style={{color:'white'}}>
                        Rows per page:
                        <select value={rowsPerPage} onChange={handleRowsPerPageChange}
                        style={{background:'#193948'}}>
                            {[5, 10, 15, 20].map(size => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Table;
