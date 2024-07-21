import React, {useState} from 'react';
import { useEffect } from 'react';

const Modal = ({ updatedData, handleInputChange, handleUpdate, handleUserDelete, closeModal, selectedRow }) => {
  const [listOfRole, setListOfRole]= useState(['Admin', 'User', 'Super User'])
  const [selectRole, setSelectRole]= useState(selectedRow.role)

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };


  const handleInputChange2= (e)=>{
    const { name, value } = e.target;
    setSelectRole(value);

  }

  useEffect(() => {
    //Runs only on the first render
    let roles = ['Admin', 'User', 'Super User']; // Define your roles here
    let currentRole = selectedRow.role.charAt(0).toUpperCase() + selectedRow.role.slice(1)




  roles = roles.filter(item => item !== currentRole);

  roles.unshift(currentRole);

  setListOfRole(roles)
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h3 className="text-lg font-bold mb-4">Edit Row</h3>
        <div className="mb-2">
          <label className="block">Username</label>
          <input
            type="text"
            name="username"
            value={selectedRow.username}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={selectedRow.email}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full"
            readOnly
          />
        </div>
        <div className="mb-2">
        <label className="block">Role</label>
        <select
            name="role"
            value={selectRole}
            onChange={handleInputChange2}
            className="border px-2 py-1 w-full"
          >
            {listOfRole.map((role) => (
              <option   key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {/* <label className="block">Role</label>
          <input
            type="text"
            name="role"
            value={selectedRow.role}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full"
            
          /> */}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={()=>{handleUpdate(selectedRow.email, selectRole)}} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
          <button onClick={()=>{handleUserDelete(selectedRow.email)}} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
