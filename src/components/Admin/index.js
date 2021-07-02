import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import { fetchContactRequests } from '../../actions/ContactsActions';

class Dashboard extends Component {

    componentDidMount(){
        this.props.fetchContactRequests()
    }


    render() {
        return(
            <div>
                DashBoard
            </div>
        )
    }
}

export default connect(null, {fetchContactRequests})(Dashboard)