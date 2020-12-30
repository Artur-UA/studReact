import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/Redux/storeRedux' ;
//import {addPost, newText,profileText, restartingAPP} from './State'
//import /* MyContext, */ {Provider} from './components/Redux/context'
//import { Provider } from 'react-redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


/* 
const renderPage = () => { */
ReactDOM.render(
        <Provider store={store}>
    <BrowserRouter>

            <App /* state={state} dispatch={store.dispatch.bind(store)} */ /* addInfo={store.addPost.bind(store)} text={store.newText.bind(store)} profileText1={store.profileText.bind(store)} *//>
    </BrowserRouter> </Provider>,document.getElementById('root')
    

    );
/*}
 
renderPage( store.getState() );

store.subscribe(() => {
    let state = store.getState() 
    renderPage(state);
}); */