import axios from "axios";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/UpdateEmployee.module.css";

import {Url } from "../constants/Global";

function AddEmployee() {
  const router = useRouter();
   const [roles ,setRoles] = useState([]);
  const [addEmployee, setEmployee] = useState({
    emp_name: "",
    emp_email: "",
    emp_address: "",
    emp_phone: "",
    role_id:"",
   
  });

 
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(
      Url +`/api/employee`,
      addEmployee
    );
    if (data.data) router.push("/Employee");
    setEmployee({
      emp_name: "",
      emp_email: "",
      emp_address: "",
      emp_phone: "",
      role_id:"",
      
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setEmployee({ ...addEmployee, [e.target.name]: value });
  };
  useEffect(function(){
    axios
    .get(Url +"/api/employeerole")
    .then((response) => setRoles(response.data))
   
   },[]);
  return (
    <>
   
    
      <div className={styles.addform}>
        <h1 className={styles.h1}>ADD EMPLOYEE</h1>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              className={styles.input}
              name="emp_name"
              placeholder="Enter Name"
              onChange={handleChange}
              value={addEmployee.emp_name}
            />
          </div>
          <div>
            <input
              type="email"
              className={styles.input}
              name="emp_email"
              placeholder="Enter Email"
              onChange={handleChange}
              value={addEmployee.emp_email}
            />
          </div>
          <div>
            <input
              type="text"
              className={styles.input}
              name="emp_address"
              placeholder="Enter Address"
              onChange={handleChange}
              value={addEmployee.emp_address}
            />
          </div>
          <div>
            <input
              type="text"
              className={styles.input}
              name="emp_phone"
              placeholder="Enter Phone"
              onChange={handleChange}
              value={addEmployee.emp_phone}
            /><br/>
            <label>Roles</label>
            <br/>
               <select
                 type="text"
                 className={styles.input}
                 name="role_id"
                 placeholder="role_id"
                 onChange={handleChange}
                 value={addEmployee.role_id}
        >
          {roles.map((role) =>(
                <option key={role.id} value={role.name}>
                    {role.name}
                    
                </option>
            ))}
              </select>
          </div>
          <div>
          <button type="submit" className={styles.button}>
              Submit
            </button>
           
          </div>
        
        </form>
      </div>
     
    </>
  );
}

export default AddEmployee;
