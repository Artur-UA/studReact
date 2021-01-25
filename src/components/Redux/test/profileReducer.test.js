import {newProfileFormReduxAC} from '../profileReducer'
import profileReducer from '../profileReducer'

const state = {
    message:[
    {id:1, name:'Хелло', like:3},
    {id:2, name:'Прив', like:22},
    {id:3, name:'Че', like:0},
    {id:4, name:'Хало', like:9}
    ]
}

it ('test', () => {
    let action = newProfileFormReduxAC('Hola')


    let newState = profileReducer(state, action)

    expect(newState.message.length).toBe(5); //expect это оператор, который говорит о том, что мы ожидаем. в данном случае мы ожидаем что длина после выполнения будет 5 
});