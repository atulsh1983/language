import React from 'react';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App';

const LoginFailed = () => {
    return (
        <div className="LoggedOut" >
            <h3>You are not logged in,
                please
                <Link to='/login'><span style={{ fontWeight: '400', margin: '0 5px' }}> Login </span></Link>
                to continue.</h3>
        </div>
    )
}

const RouterComponent = () => {

    const state = { isUserAuthenticated: localStorage.getItem("isAuth") };


    async function doUserAuthen() {
        await localStorage.setItem("isAuth", true);
        window.location.href = "/";
    }

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"
                        render={() => {
                            return (
                                state.isUserAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />)
                        }} />


                    <Route path="/home/" exact>
                        {
                            state.isUserAuthenticated ? <HomePage /> : <LoginFailed />
                        }
                    </Route>



                    <Route path="/login" >
                        <LoginPage doLogin={doUserAuthen} />
                    </Route>

                </Switch>
            </Router>
        </>
    );
};
export default RouterComponent;
