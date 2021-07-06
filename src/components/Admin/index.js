import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import { fetchContactRequests } from '../../actions/ContactsActions';
import ContactList from '../List/index'
import Navbar from '../Navbar';

class Dashboard extends Component {

    componentDidMount(){
        this.props.fetchContactRequests()
    }


    render() {
        return(
            <div>
                <Navbar />
                <ContactList />
            </div>
        )
    }
}

export default connect(null, {fetchContactRequests})(Dashboard)