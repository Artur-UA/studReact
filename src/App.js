import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
//import Profile from './components/Profile/Profile';
//import Messages from './components/Messages/Message'
import {Route, Switch} from 'react-router-dom'
//import MessagesContainer from './components/Messages/MessageContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Friends/UsersContainer';
import LoginContainer from './components/Login/LoginConteiner'
import { connect } from 'react-redux';
import {initialThunkCreator} from './components/Redux/appReducer'
import Preloader from './components/preloader/preloader'
import NotPage from './components/validate/404'

const MessagesContainer = React.lazy(() => import('./components/Messages/MessageContainer'));


class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some Error');
        console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initialThunkCreator()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
                    <Switch>
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
                        {/* <Route path='/404'render={()=> <div><h2>Error 404</h2> <img src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" width="100%" height="100%" alt="404"/> </div> }/> */}
                        <Route /* path='/404' */ render={ () => <NotPage/> }/>
                    </Switch>
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