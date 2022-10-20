import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/UpdateEmployee.module.css";
import Layout from '../components/Layout';
import {Url } from "../constants/Global";
import TextField from '@material-ui/core/TextField';

function EditStudents({ studentsUpdateData }) {
  console.log("studentsid", studentsUpdateData);
  const router = useRouter();
  const [roles ,setRoles] = useState([]);
  const [addStudents, setStudents] = useState({
    LastName: "",
    FirstName: "",
    uuid: "",
    DOB: "",
    student_role_id:"",
    email_id:"",
    password: "",
    phone_no: "",
    created: "",
  });
  useEffect(() => {
    setStudents(studentsUpdateData[0]);
  }, [studentsUpdateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      Url +`/api/students/${studentsUpdateData[0].id}`,
      addStudents
    );
    if (data.data) router.push("/Students");
    setStudents({
        LastName: "",
        FirstName: "",
        uuid: "",
        DOB: "",
        students_role_id:"",
        email_id:"",
        password: "",
        phone_no: "",
        created: "",
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
    <Layout>
    <label className={styles.label}>STUDENTS</label>
      <div className={styles.addform}>
        <h1 className={styles.h1}>EDIT STUDENTS</h1>
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
              value={addStudents.LastName}
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
              value={addStudents.uuid}
                
              />
          </div>
          <br/>
          <div>
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="DOB"
                name="DOB"
                required
                variant="outlined"
                type="text"
                label="DOB"
                autoFocus
                onChange={handleChange}
              value={addStudents.DOB}
              />
          </div>
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
                value={addStudents.email_id}
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
         value={addStudents.DOB}
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
              name="student_role_id"
              placeholder="Student Role ID"
              onChange={handleChange}
              value={addStudents.student_role_id}
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
              <Link href={`/Students`}>Go Back</Link>
            </button>
          </div>
        </form>
      </div>
      </Layout>
    </>
  );
}

export default EditStudents;
