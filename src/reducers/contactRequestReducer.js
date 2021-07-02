export const contactRequestReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CONTACT_REQUESTS':
            return action.payload
        default: return state
    }
}