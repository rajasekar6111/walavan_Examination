import axios from "axios";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/UpdateEmployee.module.css";
import moment from 'moment';
import {Url } from "../constants/Global";
import TextField from '@material-ui/core/TextField';
function AddAnswers() {
  const router = useRouter();
  const [addAnswers, setAnswers] = useState({
    answers: "",
    image_url: "",
    question_id: "",
    iscurrect: "",
  });

 
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(
      Url +`/api/answers`,
      addAnswers
    );
    if (data.data) router.push("/Answers");
    setAnswers({
        answers: "",
        image_url: "",
        question_id: "",
        iscurrect: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setAnswers({ ...addAnswers, [e.target.name]: value });
  };
 
  return (
    <>
   
    
   <div className={styles.addform}>
        <h1 className={styles.h1}>ADD ANSWERS</h1>
        <form onSubmit={onSubmit}>
          <div>
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="name"
                name="name"
                required
                variant="outlined"
                type="text"
                label="Name"
                autoFocus
                onChange={handleChange}
                value={addAnswers.name}
              />
          </div>
          <div>
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="question_id"
                name="question_id"
                required
                variant="outlined"
                type="text"
                label="Question ID"
                autoFocus
                onChange={handleChange}
                value={addAnswers.question_id}
              />
          </div>
     
         
            <div>
            <br/>
            <TextField fullWidth
         className={styles.TextField}
                autoComplete="iscurrect"
                name="iscurrect"
                required
                variant="outlined"
                type="text"
                label="Iscurrect"
                autoFocus
                onChange={handleChange}
                value={addAnswers.iscurrect}
              />
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

export default AddAnswers;
