import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { gql, useMutation } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import styles from "../styles/UpdateEmployee.module.css";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const SignUpMutation = gql`
  mutation SignUpMutation($fname: String!,$lname: String!,$email: String!, $password: String!, $DOB: String!) {
    signUp(input:{ fname: $fname, lname: $lname, email: $email, password: $password, DOB: $DOB}) {
      user {
        id
        email
      }
    }
  }
`
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    
  },
  image: {
     backgroundColor:'blue',
     
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
}));


function SignUp() {
  const classes = useStyles();
  const [signUp] = useMutation(SignUpMutation)
  const [errorMsg, setErrorMsg] = useState()
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()
    const fnameElement=event.currentTarget.elements.fname
    const lnameElement=event.currentTarget.elements.lname
    const DOBElement=event.currentTarget.elements.DOB
    const emailElement = event.currentTarget.elements.email
    const passwordElement = event.currentTarget.elements.password

    console.log(fnameElement.value);
    console.log(emailElement.value);
    try {
      await signUp({
        variables: {
          fname:fnameElement.value,
          lname:lnameElement.value,
          DOB:DOBElement.value,
          email: emailElement.value,
          password: passwordElement.value,
        },
      })

      router.push('/employeeSignin')
    } catch (error) {
      console.log(error);
      setErrorMsg(getErrorMessage(error))

    }
  }

  return (
    <Box>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} className={classes.image}>
        <h1 className={styles.h1}>Examtination</h1>
      </Grid>
      <Grid item xs={12} sm={4} md={8} component={Paper} elevation={6} square>
     
        <div className={classes.paper}>
         
    <div className={styles.addform}>
      <label className={styles.label}>Employee Sign Up</label>
      <form onSubmit={handleSubmit}>
        {errorMsg && <p>{errorMsg}</p>}
        <TextField fullWidth
         className={styles.TextField}
                autoComplete="fname"
                name="fname"
                required
                variant="outlined"
                id="fname"
                label="FirstName"
                autoFocus
              />
          <TextField fullWidth
         className={styles.TextField}
                autoComplete="lname"
                name="lname"
                required
                variant="outlined"
                id="lname"
                label="LastName"
                autoFocus
              />
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
         id="DOB"
         autoFocus
         InputLabelProps={{
           shrink: true,
         }}

              />
            </div>
            <br/>
         <TextField fullWidth
         className={styles.TextField}
                autoComplete="email"
                name="email"
                required
                variant="outlined"
                id="email"
                label="Email"
                autoFocus
              /><br/>
        <TextField fullWidth
         className={styles.TextField}
                autoComplete="password"
                name="password"
                required
                variant="outlined"
                id="password"
                label="Password"
                type="password"
                autoFocus
              
              /><br/>
        <button type="submit">Sign up</button> 
        <br/><br/>
            Already have an account?
       
        <Link  href="/employeeSignin"  >
          <a className={styles.a}> Sign in</a>
        </Link>
      </form>
    </div>
    </div>
    </Grid>
    </Grid>
    </Box>
  )
}

export default SignUp