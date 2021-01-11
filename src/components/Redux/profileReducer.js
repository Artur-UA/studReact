export const PROFILE_TEXT = 'PROFILE_TEXT';
export const SET_NEW_PROFILE = 'SET_NEW_PROFILE';


const initialState = {
    message:[
    {id:1, name:'Хелло', like:3},
    {id:2, name:'Прив', like:22},
    {id:3, name:'Че', like:0},
    {id:4, name:'Хало', like:9}
    ],
    textBeforePost: 'g',
    profileData: null
}


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case PROFILE_TEXT: {
            /* state.textBeforePost = action.textInfo;
            state.message.push({id : state.message.length + 1, name:action.textInfo, like:69}) */
            
            
            /* let newState = {...state};
            newState.textBeforePost = action.textInfo;
            newState.message = [...state.message];
            newState.message.push({id : state.message.length + 1, name:action.textInfo, like:69})

            return newState; */
            return {...state,
                textBeforePost: action.textInfo,
                message: [...state.message, {id : state.message.length + 1, name:action.textInfo, like:69}]
            }
        }
        case SET_NEW_PROFILE: {
            return {...state, profileData: action.profileData}
        }
        default:
            return state;
    }
}

export default profileReducer;

export const profileTextActionCreator = (text) => ({type:PROFILE_TEXT, textInfo:text})
export const setNewProfileAC = (profileData) => ({type: SET_NEW_PROFILE, profileData})
