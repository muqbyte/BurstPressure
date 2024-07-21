import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const TableComponent = ({listOfUser,updateUserList, handleUserDelete }) =>  {
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedData, setUpdatedData] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(null);
    // console.log("handleDataFromChild",handleDataFromChild)
    // const [autoUpdate, setAutoUpdate] = useState(false);

    // const [selectedRow, setSelectedRow] = useState(null);
    const handleDelete = (email,role) => {

        handleUserDelete(email); // Call the update function passed from the parent
        console.log('here')
        setIsModalOpen(false);
      };
    const handleUpdate = (email,role) => {

        updateUserList(email, role); // Call the update function passed from the parent
        setIsModalOpen(false);
      };
    const handleRowClick = (item,index) => {
        // setSelectedRow(item);
        // setUpdatedData(item);
        setSelectedRow(item);
        setSelectedIndex(index);

        setIsModalOpen(true);
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> 
        <tr className="text-center">
          <th scope="col" className="px-6 py-3">ID</th>
          <th scope="col" className="px-6 py-3">Username</th>
          <th scope="col" className="px-6 py-3">Email</th>
          <th scope="col" className="px-6 py-3">Role</th>
        </tr>
      </thead>
      <tbody>
        {listOfUser.map((item) => (
          <tr className="text-center" key={item.id} onClick={() => handleRowClick(item)}>
            <td className="px-6 py-4 text-white">{item.id}</td>
            <td className="px-6 py-4 text-white">{item.username}</td>
            <td className="px-6 py-4 text-white">{item.email}</td>
            <td className="px-6 py-4 text-white">{item.role}</td>
          </tr>
        ))}
      </tbody>
      
    </table>

{isModalOpen  &&(
    <Modal
      updatedData={updatedData}
      handleInputChange={handleInputChange}
      handleUpdate={handleUpdate}
      handleUserDelete={handleDelete}
    //   userDetail = {props.listOfUser[selectedIndex]}
      selectedRow={selectedRow}
      closeModal={() => setIsModalOpen(false)}
    />
  )}
   </div>

  );
};

export default TableComponent;
