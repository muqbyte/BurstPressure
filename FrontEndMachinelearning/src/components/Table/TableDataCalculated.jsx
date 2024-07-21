import React, { useState } from 'react';
const TableComponent = ({listOfUser }) =>  {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> 
        <tr className="text-center">
          <th scope="col" className="px-6 py-3">SID</th>
          <th scope="col" className="px-6 py-3">Tensile</th>
          <th scope="col" className="px-6 py-3">Depth</th>
          <th scope="col" className="px-6 py-3">Width</th>
          <th scope="col" className="px-6 py-3">Length</th>
          <th scope="col" className="px-6 py-3">Burst</th>
          <th scope="col" className="px-6 py-3">Type</th>
          <th scope="col" className="px-6 py-3">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {listOfUser.map((item) => (
          <tr className="text-center" onClick={() => handleRowClick(item)}>
            <td className="px-6 py-4 text-white">{item.SID}</td>
            <td className="px-6 py-4 text-white">{item.tensile}</td>
            <td className="px-6 py-4 text-white">{item.depth}</td>
            <td className="px-6 py-4 text-white">{item.width}</td>
            <td className="px-6 py-4 text-white">{item.length}</td>
            <td className="px-6 py-4 text-white">{item.burst}</td>
            <td className="px-6 py-4 text-white">{item.type}</td>
            <td className="px-6 py-4 text-white">{item.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>

  );
};

export default TableComponent;
