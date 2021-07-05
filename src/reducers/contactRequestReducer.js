export const contactRequestReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CONTACT_REQUESTS':
            return action.payload
        case 'POST_REQUEST':
            return [...state, action.payload]
        default:
             return state
    }
}