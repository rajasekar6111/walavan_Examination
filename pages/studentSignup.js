import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { gql, useMutation } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import styles from "../styles/UpdateEmployee.module.css";
import {TextInput,Pane,Table,Button} from 'evergreen-ui';


const SignUpMutation = gql`
  mutation SignUpMutation($fname: String!,$lname: String!,$email: String!, $password: String!, $DOB: String!, $phone_no: String!) {
    signUp(input:{ fname: $fname, lname: $lname, email: $email, password: $password, DOB: $DOB, phone_no: $phone_no}) {
      user {
        id
        email
      }
    }
  }
`
function SignUp() {
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
    const phone_noElement = event.currentTarget.elements.phone_no

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
          phone_no: phone_noElement.value,
        },
      })

      router.push('/studentSignin')
    } catch (error) {
      console.log(error);
      setErrorMsg(getErrorMessage(error))

    }
  }

  return ( 
    <Pane className={styles.addform}>
      <Pane className={styles.label}>Student Sign Up</Pane>
      <form onSubmit={handleSubmit}>
        {errorMsg && <p>{errorMsg}</p>}
        <Table.Row>
          <Table.TextCell>
            First Name
          </Table.TextCell>
          <Table.TextCell>
          <TextInput 
         className={styles.TextField}
                autoComplete="fname"
                name="fname"
                required
                variant="outlined"
                id="fname"
                label="FirstName"
                autoFocus
              />
            </Table.TextCell>
        </Table.Row>
        <Table.Row>
          <Table.TextCell>
             Last Name
          </Table.TextCell>
          <Table.TextCell>
          <TextInput 
         className={styles.TextField}
                autoComplete="lname"
                name="lname"
                required
                variant="outlined"
                id="lname"
                label="LastName"
                autoFocus
              />
    
          </Table.TextCell>
        </Table.Row>
        <Table.Row>
          <Table.TextCell>
          Date of Birth
          </Table.TextCell>
          <Table.TextCell>
          <TextInput fullWidth
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
          </Table.TextCell>
        </Table.Row>
        <Table.Row>
          <Table.TextCell>
           Enter the Email
          </Table.TextCell>
          <Table.TextCell>
          <TextInput 
         className={styles.TextField}
                autoComplete="email"
                name="email"
                required
                variant="outlined"
                id="email"
                label="Email"
                autoFocus
              />
            </Table.TextCell>
        </Table.Row>
          <Table.Row>
            <Table.TextCell>
            Password
            </Table.TextCell>
            <Table.TextCell>
            <TextInput 
         className={styles.TextField}
                autoComplete="password"
                name="password"
                required
                variant="outlined"
                id="password"
                label="Password"
                type="password"
              
              />
              </Table.TextCell>
          </Table.Row>
       <Table.Row>
        <Table.TextCell>
        Phone Number
        </Table.TextCell>
        <Table.TextCell>
        <TextInput 
         className={styles.TextField}
                autoComplete="phone_no"
                name="phone_no"
                required
                variant="outlined"
                id="phone_no"
                label="Phone No"
                autoFocus
              />
          </Table.TextCell>
       </Table.Row>
        <Button type="submit">Sign up</Button> 
        
            Already have an account?
       
        <Link  href="/studentSignin"  >
          <a className={styles.a}> Sign in</a>
        </Link>
      </form>
    </Pane>
 
  )
}
export default SignUp