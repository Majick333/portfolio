export const fetchContactRequests = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/contact_requests')
        .then(resp => resp.json())
        .then(requests => dispatch({type: 'FETCH_CONTACT_REQUESTS', payload: requests}))
    }
}

export const postContactRequest = request => {
    return dispatch =>{
        fetch('http://localhost:3000/contact_requests', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {'Content-Type': 'application/json'}})
            .then(resp => resp.json())
            .then(request => dispatch({type: 'POST_REQUEST', payload: request}))
    }
    
}