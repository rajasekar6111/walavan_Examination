

import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { gql } from '@apollo/client'
import { useMutation, useApolloClient } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import styles from "../styles/UpdateEmployee.module.css";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const SignInMutation = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
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
    backgroundImage: 'url(/examtination.webp)',
 
 
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
}));
function SignIn() {
  const classes = useStyles();
  const client = useApolloClient()
  const [signIn] = useMutation(SignInMutation)
  const [errorMsg, setErrorMsg] = useState()
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const emailElement = event.currentTarget.elements.email
    const passwordElement = event.currentTarget.elements.password

    try {
      await client.resetStore()
      const { data } = await signIn({
        variables: {
          email: emailElement.value,
          password: passwordElement.value,
        },
      })
      if (data.signIn.user) {
        await router.push('/Employee')
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error))
    }
  }

  return (
    <Box>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
     
    <div className={styles.addform}>
      <label className={styles.label}>Sign In</label>
      <form onSubmit={handleSubmit}>
        {errorMsg && <p>{errorMsg}</p>}
        <TextField fullWidth
         className={styles.TextField}
                autoComplete="Email"
                name="email"
                required
                variant="outlined"
                type="email"
                label="Email"
                autoFocus
              /><br/>
        <TextField fullWidth
         className={styles.TextField}
                name="password"
                required
                variant="outlined"
                label="Password"
                type="password"
                autoComplete="current-password"
              /><br/>
        <button type="submit">Sign in</button> {' '}
        <br/><br/>
        Don't have an account yet?
       
       <Link  href="/signup "  >
         <a className={styles.a}> Register</a>
       </Link>
      </form>
    </div>
    </div>
      </Grid>
    </Grid>
    </Box>

  )
}

export default SignIn