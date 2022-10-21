import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/UpdateEmployee.module.css";
import Layout from '../components/Layout'
import { Radio } from '@nextui-org/react';
import {Url } from "../constants/Global";
import TextField from '@material-ui/core/TextField';

function EditQuestions({ questionsUpdateData }) {
  console.log("questionsid", questionsUpdateData);
  const router = useRouter();
  const [types ,setTypes] = useState([]);
  const [addQuestions, setQuestions] = useState({
    name: "",
    image_url: "",
    question_type_id: "",
    is_delete:"",
    is_active:"",
    created: "",
    answers: "",  

  });
  useEffect(() => {
    setQuestions(questionsUpdateData[0]);
  }, [questionsUpdateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
        Url +`/api/questions/${questionsUpdateData[0].id}`,
        addQuestions
      );
    if (data.data) router.push("/questions");
    setQuestions({
      name: "",
      image_url: "",
      question_type_id: "",
      is_delete:"",
      is_active:"",
      created: "",
      answers: "",

    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setQuestions({ ...addQuestions, [e.target.name]: value });
  };
  useEffect(function(){
    axios
    .get(Url +"/api/question_role")
    .then((response) => setRoles(response.data))
   
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
              value={addQuestions.question_type_id}
            >
                {types.map((type) =>(
                <option value={type.name} key={type.id}>
                    {type.name}
                    
                </option>
            ))}
            </select>
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
              value={addStudents.name}
              />
          </div>
          </div>
          <div>
          <h1 className={styles.h1}>EDIT ANSWERS</h1>
          <Radio.Group label="Options" defaultValue="A">
          <Radio value="A"> <input
           type="text"
           className={styles.input}
           name="answers"
           placeholder="Enter answers"
           onChange={handleChange}
           value={addQuestions.answers}
           /></Radio>
             <Radio value="B" > <input
           type="text"
           className={styles.input}
           name="answers"
           placeholder="Enter answers"
           value={addQuestions.answers}
           onChange={handleChange}
           /></Radio>
      <Radio value="C" > <input
           type="text"
           className={styles.input}
           name="answers"
           placeholder="Enter answers"
           value={addQuestions.answers}
           onChange={handleChange}
           /></Radio>
      <Radio value="D" > <input
           type="text"
           className={styles.input}
           name="answers"
           placeholder="Enter answers"
           value={addQuestions.answers}
           onChange={handleChange}
           /></Radio>
      
      
           </Radio.Group>       
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