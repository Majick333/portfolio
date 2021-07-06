import React from 'react';
import {connect} from 'react-redux';
import { Container, H1 } from './ListElements';


const ContactList = ({contacts}) => {
    return(
        <>
            <Container>
                <H1>Admin::</H1>
                <br/>
                <ul>
                {contacts.map(contact =>  <li key={contact.id}> Name::{contact.name} Email::{contact.email} Phone::{contact.phone}
                <br/>
                Info::{contact.message}
                </li> )}
                </ul>
             </Container>
        </>
    )
}

const mapStateToProps = state =>{
    return {contacts: state.contact_requests}}

export default connect(mapStateToProps)(ContactList);
