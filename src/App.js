import RouterComponent from './router/';
// import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/navbar/Footer'
import './i18n';
import './App.css'

const isUserAuthenticated = localStorage.getItem("isAuth");
const App = () =>
(
  <>
    { isUserAuthenticated && <Navbar /> }
    <RouterComponent />
  </>
)


export default App;
