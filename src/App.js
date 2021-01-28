import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
//import Profile from './components/Profile/Profile';
//import Messages from './components/Messages/Message'
import {Route} from 'react-router-dom'
//import MessagesContainer from './components/Messages/MessageContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Friends/UsersContainer';
import LoginContainer from './components/Login/LoginConteiner'
import { connect } from 'react-redux';
import {initialThunkCreator} from './components/Redux/appReducer'
import Preloader from './components/preloader/preloader'

const MessagesContainer = React.lazy(() => import('./components/Messages/MessageContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initialThunkCreator()
    }
    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return ( 
        <div className = 'app-wrapper' >
            <HeaderContainer / >

            <Navbar /* data={props.state} 
                    dispatch={props.dispatch} */
                    /* info={props.addInfo} 
                    infoText={props.text} */ />
                <div>
                    <Route path='/profile/:name_id?' render={()=> <ProfileContainer /* state={props.state} dispatch={props.dispatch} *//>
                                                        /* <Profile message={props.state}
                                                                dispatch={props.dispatch}
                                                                profileText2={props.profileText1}/> */}/>

                    <Route path='/message' render={()=> 
                                
                        <React.Suspense fallback={<Preloader />}>
                            <MessagesContainer />
                        </React.Suspense>
                                                      //<MessagesContainer /* state={props.state} dispatch={props.dispatch} *//>
                    
                    //<MessagesContainer /* state={props.state} dispatch={props.dispatch} *//>
                                                        /*<Messages info={props.state} 
                                                                    message={props.state.profilePage} 
                                                                img={props.state.profilePage}  
                                                                dispatch={props.dispatch}/>*/}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
        </div> 
    )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        initialThunkCreator: () => {
            dispatch(initialThunkCreator())
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(App)