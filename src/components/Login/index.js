import React from 'react'
import { LoginContainer, FormWrapper, Icon, FormContent, 
    Form, FormH1, FormLabel, FormInput, FormButton } from './LoginElements'
const Login = () => {
    return (
        <>
        <LoginContainer>
            <FormWrapper>
                <Icon to='/'>RM</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Admin Login</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Log In</FormButton>
                        </Form>
                    </FormContent>
            </FormWrapper>
        </LoginContainer>
            
        </>
    )
}

export default Login
