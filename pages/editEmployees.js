import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/AddEmployee.module.css";
import Layout from '../components/Layout';
import {Url } from "../constants/Global"
import moment from 'moment';
import TextField from '@material-ui/core/TextField';

function EditEmployees({ employeesUpdateData }) {
  console.log("employeesid", employeesUpdateData);
  const router = useRouter();
  const [roles ,setRoles] = useState([]);
  const [addEmployees, setEmployees] = useState({
    LastName: "",
    FirstName: "",
    uuid: "",
    DOB: "",
    emp_role_id:"",
    email_id:"",
    created: moment().format( 'YYYY-MM-DD HH:mm:ss'),
  });
  useEffect(() => {
    setEmployees(employeesUpdateData[0]);
  }, [employeesUpdateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      Url +`/api/employees/${employeesUpdateData[0].id}`,
      addEmployees
    );
    if (data.data) router.push("/Employees");
    setEmployees({
      LastName: "",
      FirstName: "",
      uuid: "",
      DOB: "",
      emp_role_id:"",
      email_id:"",
      created: moment().format( 'YYYY-MM-DD HH:mm:ss'),
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setEmployees({ ...addEmployees, [e.target.name]: value });
  };
  useEffect(function(){
    axios
    .get(Url +"/api/employeerole")
    .then((response) => setRoles(response.data))
   
   },[]);
  return (
    <>
    <Layout>
    <label className={styles.label}>EMPLOYEES</label>
      <div className={styles.addform}>
        <h1 className={styles.h1}>EDIT EMPLOYEES</h1>
        <form onSubmit={onSubmit}>
        <div>
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="FirstName"
                name="FirstName"
                required
                variant="outlined"
                type="text"
                label="FirstName"
                autoFocus
                onChange={handleChange}
              value={addEmployees.FirstName}
              />
          </div>
          <br/>
          <div>
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="LastName"
                name="LastName"
                required
                variant="outlined"
                type="text"
                label="LastName"
                autoFocus
                onChange={handleChange}
              value={addEmployees.LastName}
              />
          </div>
          <br/>
          <div>
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="uuid"
                name="uuid"
                required
                variant="outlined"
                type="text"
                label="uuid"
                autoFocus
                onChange={handleChange}
              value={addEmployees.uuid}
                
              />
          </div>
          <br/>
          
        
          <br/>
          <div>
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="email_id"
                name="email_id"
                required
                variant="outlined"
                type="emil_id"
                label="Email_Id"
                autoFocus
                onChange={handleChange}
                value={addEmployees.email_id}
              />
          </div>
          <br/>
          <div style={{
      margin: 'auto',
      display: 'block',
      width: '500px'
    }}>
          <br/>
          <TextField fullWidth
         className={styles.TextField}
         autoComplete="DOB"
         label="Date of Birth"
         name="DOB"
         type="date"
         autoFocus
         onChange={handleChange}
         value={addEmployees.DOB}
         InputLabelProps={{
           shrink: true,
         }}

              />
            </div>
            <div>
            <br/>
          </div>
          <br/>
          <div>
          <select
              type="text"
              className={styles.input}
              name="emp_role_id"
              placeholder="Emp Role ID"
              onChange={handleChange}
              value={addEmployees.emp_role_id}
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
              <Link href={`/Employees`}>Go Back</Link>
            </button>
          </div>
        </form>
      </div>
      </Layout>
    </>
  );
}

export default EditEmployees;
