import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1,
         FormLabel, FormInput, FormButton} from './ContactElements'

const ContactForm = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>RM</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Reach out About your Project</FormH1>

                        <FormLabel htmlFor='for'>Your Name</FormLabel>
                        <FormInput type='text' required />

                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />

                        <FormLabel htmlFor='for'>Phone Number</FormLabel>
                        <FormInput type='text' required />

                        <FormLabel htmlFor='for'>Tell me about your project...</FormLabel>
                        <FormInput type='text' required />

                        <FormButton type='submit'>Submit</FormButton>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default ContactForm 

