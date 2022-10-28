import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/AddEmployee.module.css";
import Layout from '../components/Layout';
import {Url } from "../constants/Global"
import moment from 'moment';
import TextField from '@material-ui/core/TextField';

function EditAnswers({ answersUpdateData }) {
  console.log("answersid", answersUpdateData);
  const router = useRouter();
  const [addAnswers, setAnswers] = useState({
    answers: "",
    image_url: "",
    question_id: "",
    iscurrect: "",
  });
  useEffect(() => {
    setAnswers(answersUpdateData[0]);
  }, [answersUpdateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      Url +`/api/answers/${answersUpdateData[0].id}`,
      addAnswers
    );
    if (data.data) router.push("/Answers");
    setEmployees({
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
    <Layout>
    <label className={styles.label}>ANSWERS</label>
      <div className={styles.addform}>
        <h1 className={styles.h1}>EDIT ANSWERS</h1>
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
            <button className={styles.button}>
              <Link href={`/Answers`}>Go Back</Link>
            </button>
          </div>
        </form>
      </div>
      </Layout>
    </>
  );
}

export default EditAnswers;
