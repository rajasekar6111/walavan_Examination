import axios from "axios";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/UpdateEmployee.module.css";
import moment from 'moment';
import {Url } from "../constants/Global"
import TextField from '@material-ui/core/TextField';


function AddStudents() {
  const router = useRouter();
   const [roles ,setRoles] = useState([]);
  const [addStudents, setStudents] = useState({
    LastName: "",
    FirstName: "",
    uuid: "",
    DOB: "",
    student_role_id:"",
    email_id:"",
    phone_no: "",
    created: moment().format( 'YYYY-MM-DD HH:mm:ss'),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(
      Url +"/api/students",
      addStudents
    );
    if (data.data) router.push("/Students");
    setStudents({
        LastName: "",
        FirstName: "",
        uuid: "",
        DOB: "",
        student_role_id:"",
        email_id:"",
        phone_no: "",
        created: moment().format( 'YYYY-MM-DD HH:mm:ss'),
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setStudents({ ...addStudents, [e.target.name]: value });
  };
  useEffect(function(){
    axios
    .get(Url +"/api/student_role")
    .then((response) => setRoles(response.data))
   
   },[]);
  return (
    <>
        
      <div className={styles.addform}>
        <h1 className={styles.h1}>ADD STUDENTS</h1>
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
                value={addStudents.FirstName}
              />
          </div>
          <div>
          <br/>
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
                value={addStudents.LastName}
              />
          </div>
          <div>
          <br/>
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
                value={addStudents.uuid}
              />
          </div>
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
         value={addStudents.DOB}
         InputLabelProps={{
           shrink: true,
         }}

              />
            </div>
            <div>
            <br/>
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
                value={addStudents.email_id}
              />
            </div>
            
      
            <div>
            <br/>
            <TextField fullWidth
         className={styles.TextField}
                autoComplete="phone_no"
                name="phone_no"
                required
                variant="outlined"
                type="text"
                label="Phone_no"
                autoFocus
                onChange={handleChange}
                value={addStudents.phone_no}
              />
            
            <br/>
            <label>Roles</label>
            <br/>
               <select
                 type="text"
                 className={styles.input}
                 name="student_role_id"
                 placeholder="student_role_id"
                 onChange={handleChange}
                 value={addStudents.student_role_id}
        >
          {roles.map((role) =>(
                <option key={role.id} value={role.id}>
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

export default AddStudents;