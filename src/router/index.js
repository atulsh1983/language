import React from 'react';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Navbar from '../components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App';
import { useTranslation } from 'react-i18next';
import '../App.css';

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
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    async function doUserAuthen() {
        await localStorage.setItem("isAuth", true);
        window.location.href = "/";
    }
    const isUserAuthenticated = localStorage.getItem("isAuth");

    return (
        <>
            { isUserAuthenticated && <Navbar t={t}/> }
            <Router>
                <Switch>
                    <Route exact path="/"
                        render={() => {
                            return (
                                state.isUserAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />)
                        }} />
                    <Route path="/home/" exact>
                        {
                            state.isUserAuthenticated ? <HomePage t={t} /> : <LoginFailed t={t} />
                        }
                    </Route>
                    <Route path="/login" >
                        <LoginPage t={t} doLogin={doUserAuthen} />
                    </Route>

                </Switch>
            </Router>
            <div className={'btnWpr'}>
                <button className={"btn"} onClick={() => changeLanguage('en')}>English</button>
                <button className={"btn"} onClick={() => changeLanguage('fr')}>German</button>
            </div>
        </>
    );
};
export default RouterComponent;
