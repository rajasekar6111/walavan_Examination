import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/UpdateEmployee.module.css";
import Layout from '../components/Layout'
import { Radio } from '@nextui-org/react';
import TextField from '@material-ui/core/TextField';
import {Url } from "../constants/Global"

function EditQuestions({ questionsUpdateData,answersUpdateData }) {
  console.log("questionsid", questionsUpdateData);
  console.log("answersid", answersUpdateData);
  const router = useRouter();
  const [types ,setTypes] = useState([]);
  const [editQuestions, setEditQuestions] = useState({
    name: "",
    question_type_id: "",
    is_delete:"",
    is_active:"",
    created: "",
  });
  const [editAnswers, setEditAnswers] = useState({
    answers:"",
   
  });
  
  useEffect(() => {
    setEditQuestions(questionsUpdateData[0]);
    setEditAnswers(answersUpdateData[0]);
  }, [questionsUpdateData][answersUpdateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      Url+`/api/questions/${questionsUpdateData[0].id}`,
      editQuestions
    );
    e.preventDefault();
    let data1 = await axios.put(
      Url+`/api/answers/${answersUpdateData[0].id}`,
      editAnswers
    );
    if (data.data) router.push("/Questions");
    setEditQuestions({
      name: "",
      question_type_id: "",
      is_delete:"",
      is_active:"",
      created: "",
     
        });
        if (data1.data) router.push("/Questions");
        setEditAnswers({
      answers:"",
   
     
        });
  };
  


  const handleChange = (e) => {
    const value = e.target.value;
  
    console.log("value", value);
   
  
    setEditQuestions({ ...editQuestions, [e.target.name]: value });
    setEditAnswers({ ...editAnswers, [e.target.name]: value });
  };
 
  useEffect(function(){
    axios
    .get( Url+`/api/question_type`)
    .then((response) => setTypes(response.data))
   
   },[]);
  return (
    <>
    <Layout>
    <label className={styles.label}>QUESTIONS</label>
      <div className={styles.addform}>
        <h1 className={styles.h1}>EDIT QUESTIONS</h1>
        <form onSubmit={onSubmit}>
          <div>
          <select
              type="text"
              className={styles.input}
              name="question_type_id"
              placeholder="Question Type ID"
              onChange={handleChange}
              value={editQuestions.question_type_id}
            >
                {types.map((type) =>(
                <option value={type.name} key={type.id}>
                    {type.name}
                   
                </option>
            ))}
            </select>
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
              value={editQuestions.name}
              />
          </div>
          <div>
          <h1 className={styles.h1}>EDIT ANSWERS</h1>
          
      <TextField fullWidth
         className={styles.TextField}
                autoComplete="answers"
                name="answers"
                required
                variant="outlined"
                type="text"
                label="Answers"
                autoFocus
                onChange={handleChange}
                value={editAnswers.answers}
              /> 
           </div>
         
          <div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
            <button className={styles.button}>
              <Link href={`/Questions`}>Go Back</Link>
            </button>
          </div>
        </form>
      </div>
      </Layout>
    </>
  );
}

export default EditQuestions;