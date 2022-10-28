import axios from "axios";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/UpdateEmployee.module.css";
import moment from 'moment';
import { Radio } from '@nextui-org/react';
import {Url } from "../constants/Global";
import TextField from '@material-ui/core/TextField';

function AddQuestions() {
  const router = useRouter();
   const [types ,setTypes] = useState([]);
  const [addQuestions, setQuestions] = useState({
    name: "",
    image_url: "",
    question_type_id: "",
    is_delete:"0",
    is_active:"1",
    created: moment().format( 'YYYY-MM-DD HH:mm:ss'),
    answers1:"",
    answers2:"",
    answers3:"",
    answers4:"",

 
 });
  
 
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(addQuestions);
    let data = await axios.post(
        Url +`/api/questions`,    
        addQuestions
    );
    if (data.data) router.push("/Questions");
    setQuestions({
      name: "",
      image_url: "",
      question_type_id: "",
      is_delete:"0",
      is_active:"1",
      created: moment().format( 'YYYY-MM-DD HH:mm:ss'),
    
      answers1:"",
      answers2:"",
      answers3:"",
      answers4:"",
      currectans:""
     
        });
  };
  

  const correctanswerhandleChange = (e) => {
    const value = e;
    console.log("value", value);
    setQuestions({ ...addQuestions, 'currectans': value });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setQuestions({ ...addQuestions, [e.target.name]: value });
  };
  useEffect(function(){
    axios
    .get(Url +"/api/question_type")
    .then((response) => setTypes(response.data))

   },[]);
  return (
    <>
   
      <div className={styles.addform}>
        <h1 className={styles.h1}>ENTER QUESTIONS</h1>
        <form onSubmit={onSubmit}>
          <div>
          <label>Types</label>
            <br/>
           
               <select
                 type="text"
                 className={styles.input}
                 name="question_type_id"
                 placeholder="question_type_id"
                 onChange={handleChange}
                 value={addQuestions.question_type_id}
                 >
          {types.map((type) =>(
                <option key={type.id} value={type.id}>
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
                label="Enter the Question"
                autoFocus
                onChange={handleChange}
                value={addQuestions.name}
              />
            
            <br/>
            
              <h1 className={styles.h1}>ENTER ANSWERS</h1>

              
           </div>
           <Radio.Group onChange={correctanswerhandleChange}  name="correctanswer" label="Options" defaultValue="1">
          <Radio value="1"> <input
           type="text"
           className={styles.input}
           name="answers1"
           placeholder="Enter answers"
           onChange={handleChange}
           value={addQuestions.answers1}
           /></Radio>

             <Radio value="2" > <input
           type="text"
           className={styles.input}
           name="answers2"
           placeholder="Enter answers"
           value={addQuestions.answers2}
           onChange={handleChange}
           /></Radio>

      <Radio value="3" > <input
           type="text"
           className={styles.input}
           name="answers3"
           placeholder="Enter answers"
           value={addQuestions.answers3}
           onChange={handleChange}
           /></Radio>

      <Radio value="4" > <input
           type="text"
           className={styles.input}
           name="answers4"
           placeholder="Enter answers"
           value={addQuestions.answers4}
           onChange={handleChange}
           /></Radio>

           </Radio.Group>     
          
          
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

export default AddQuestions;