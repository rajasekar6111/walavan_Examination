import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { gql } from '@apollo/client'
import { useMutation, useApolloClient } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import styles from "../styles/UpdateEmployee.module.css";
import {TextInput,Pane,Table,Button} from 'evergreen-ui';


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

function SignIn() {
  
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
        await router.push('/Students')
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error))
    }
  }

  return (
    <Pane className={styles.addform}>
      <Pane className={styles.label}>Student Sign In</Pane>
      <form onSubmit={handleSubmit}>
      {errorMsg && <p>{errorMsg}</p>}
      <Table.Row>
        <Table.TextCell>
         <b>Enter the Email</b> 
        </Table.TextCell>
        <Table.TextCell>
        <TextInput 
                autoComplete="Email"
                name="email"
                required
                type="email"
                label="Email"
              />
        </Table.TextCell>
      </Table.Row>
      <Table.Row>
      <Table.TextCell>
         <b>Password</b> 
        </Table.TextCell>
        <Table.TextCell>
        <TextInput 
         className={styles.TextField}
                name="password"
                required
                variant="outlined"
                label="Password"
                type="password"
                autoComplete="password"
              />
        </Table.TextCell>
      </Table.Row>
        <Button type="submit">Sign in</Button> {' '}
        Don't have an account yet?
       <Link  href="/studentSignup "  >
         <a className={styles.a}> Register</a>
       </Link>
      </form>
    </Pane>
  )
}

export default SignIn