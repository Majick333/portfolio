export const fetchContactRequests = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/contact_requests')
        .then(resp => resp.json())
        .then(requests => console.log('fetch contact requests', requests))
    }
}