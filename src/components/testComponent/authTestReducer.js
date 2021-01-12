export const GET_NEW_USER = 'GET_NEW_USER'

const initialState = {
    id: null,
    email: null,
    login: null
}

const authTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_USER:
            return {
                ...state,
                ...action.data
            }
    
        default:
            return state
    }
}

export const authTestAC = (id, login, email) => ( {type : GET_NEW_USER, data:{id, login, email}})
export default authTestReducer;
