export const DIALOG_TEXT = 'DIALOG_TEXT';
export const DIALOG_TEXT_SEND = 'DIALOG_TEXT_SEND';
export const DIALOG_TEXT_SEND_REDUX_FORM = 'DIALOG_TEXT_SEND_REDUX_FORM';

type PeopleType = {
    id: number,
    message: string,
    img: string
}
type DialogsType = {
    id: number,
    message: string
}

export type InitialStateType = {
    people: Array<PeopleType>,
    dialogs: Array<DialogsType>,
    textTest: string
}

const initialState:InitialStateType = {
        people: [
            {id:1, message:'Привет', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:2, message:'Приве', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
            {id:3, message:'Прив', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:4, message:'При', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
            {id:5, message:'Пр', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:6, message:'П', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"}
        ],
        dialogs: [
            {id:1, message:'Пока'},
            {id:2, message:'Пок'},
            {id:3, message:'По'},
            {id:4, message:'П'}
        ],
        textTest:'Привет'
    }

const messageReducer = (state:InitialStateType = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case DIALOG_TEXT: {
            /* state.textTest = action.infoText; */
            
            /* let newState = {...state} 
            newState.textTest = action.infoText;

            return newState; */
            return {...state,
                textTest: action.infoText
            }
        }
        case DIALOG_TEXT_SEND: {
            /* state.dialogs.push({id : state.dialogs.length +1, message : state.textTest})
            state.textTest = ''; 
            return state; */
            
            /* let newState = {...state};
            newState.dialogs = [...state.dialogs];
            newState.dialogs.push({id : state.dialogs.length +1, message : state.textTest})
            newState.textTest = ''; 
            return newState; */
            return {...state,
                dialogs: [...state.dialogs, {id : state.dialogs.length +1, message : state.textTest}],
                textTest: ''
            }
        }
        case DIALOG_TEXT_SEND_REDUX_FORM: {
            let text = action.message;
            return{ 
                ...state,
                dialogs: [...state.dialogs, {id : state.dialogs.length +1, message : text} ]
            }
        }
        default: 
            return state
    }
}

export default messageReducer;

type dialogTextType = {
    type: typeof DIALOG_TEXT,
    infoText: string
}
type dialogTextSendType = {
    type: typeof DIALOG_TEXT_SEND,
}
type dialogTextSendReduxType = {
    type: typeof DIALOG_TEXT_SEND_REDUX_FORM,
    message: string
}

export const dialogTextActionCreator = (info: string):dialogTextType => ({type : DIALOG_TEXT, infoText: info})

export const dialogTextSendActionCreator = ():dialogTextSendType => ({type: DIALOG_TEXT_SEND})

export const dialogTextSendReduxFromActionCreator = (message: string):dialogTextSendReduxType => ({type: DIALOG_TEXT_SEND_REDUX_FORM, message})