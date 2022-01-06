import React from 'react';

import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Contact from './components/mainComponents/contact';
import Project from './components/mainComponents/projects';
import Overview from './components/mainComponents/overview';
import Resume from './components/mainComponents/resume'

import { useSelector } from 'react-redux';

function App() {

    const appNav = useSelector(store => store.appNav.value);

  return (
    <>
      <Navbar/>
      <div>
        {appNav === "overview" && <Overview />}
        {appNav === "contact" && <Contact />}
        {appNav === "project" && <Project />}
        {appNav === "resume" && <Resume />}
      </div>
      <Footer/>
    </>
  );
}

export default App;
