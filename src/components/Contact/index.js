import React, {Component} from 'react'
import {connect} from 'react-redux';
import { postContactRequest } from '../../actions/ContactsActions'
import { Container, FormWrap, Icon, FormContent, Form, FormH1,
         FormLabel, FormInput, FormButton} from './ContactElements'

class ContactForm extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        phone:'',
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.postContactRequest(this.state)
    }

    render() {
        return (
            
            <Container>
                <FormWrap>
                    <Icon to='/'></Icon>
                    <FormContent>
                        <Form onSubmit={this.handleSubmit}>
                            <FormH1>Reach out About your Project</FormH1>

                            <FormLabel htmlFor='for'>Your Name</FormLabel>
                            <FormInput type='text' value={this.state.name} onChange={this.handleChange} name='name' required />

                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' value={this.state.email} onChange={this.handleChange} name='email' required />

                            <FormLabel htmlFor='for'>Phone Number</FormLabel>
                            <FormInput type='text' value={this.state.number} onChange={this.handleChange} name='phone' required />

                            <FormLabel htmlFor='for'>Tell me about your project...</FormLabel>
                            <FormInput type='text' value={this.state.message} onChange={this.handleChange} name='message' required />

                            <FormButton type='submit'>Submit</FormButton>

                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            )
        }
    
}

export default connect(null, {postContactRequest})(ContactForm) 

