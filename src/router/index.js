import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App';



const LoginFailed = ({ t }) => {
    return (
        <div className="LoggedOut" >
            <h3>{t("logOutPage.description1")}
                <Link to='/login'>
                    <span style={{ fontWeight: '400', margin: '0 5px' }}>
                        {t("logOutPage.linkText")}
                    </span>
                </Link>
                {t("logOutPage.description2")} </h3>
        </div>
    )
}

const RouterComponent = () => {

    const state = { isUserAuthenticated: localStorage.getItem("isAuth") };
    const { t, i18n } = useTranslation();
    const isUserAuthenticated = localStorage.getItem("isAuth");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };
    async function doUserAuthen() {
        await localStorage.setItem("isAuth", true);
        window.location.href = "/";
    }


    return (
        <>
            {isUserAuthenticated && <Navbar t={t} />}
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
                <button onClick={() => changeLanguage('en')} className={'btn'}>
                    {t('language.english')}
                </button>
                <button onClick={() => changeLanguage('fr')} className={'btn'}>
                    {t('language.bengali')}
                </button>
                <button onClick={() => changeLanguage('vie')} className={'btn'}>
                    {t('language.vietnamese')}
                </button>
            </div>
        </>
    );
};
export default RouterComponent;
