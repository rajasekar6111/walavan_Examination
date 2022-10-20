import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/AddEmployee.module.css";
import Layout from '../components/Layout';
import {Url } from "../constants/Global"

function EditEmployee({ employeeUpdateData }) {
  console.log("employeeid", employeeUpdateData);
  const router = useRouter();
  const [roles ,setRoles] = useState([]);
  const [addEmployee, setEmployee] = useState({
    emp_name: "",
    emp_email: "",
    emp_address: "",
    emp_phone: "",
    role_id:"",
  });
  useEffect(() => {
    setEmployee(employeeUpdateData[0]);
  }, [employeeUpdateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      Url +`/api/employee/${employeeUpdateData[0].emp_id}`,
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
    <Layout>
    <label className={styles.label}>EMPLOYEE</label>
      <div className={styles.addform}>
        <h1 className={styles.h1}>EDIT EMPLOYEE</h1>
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
            />
          </div>
          <div>
          <select
              type="text"
              className={styles.input}
              name="role_id"
              placeholder="Role ID"
              onChange={handleChange}
              value={addEmployee.role_id}
            >
                {roles.map((role) =>(
                <option value={role.name} key={role.id}>
                    {role.name}
                    
                </option>
            ))}
            </select>
          </div>
          <div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
            <button className={styles.button}>
              <Link href={`/Employee`}>Go Back</Link>
            </button>
          </div>
        </form>
      </div>
      </Layout>
    </>
  );
}

export default EditEmployee;
