import React from 'react';

import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Contact from './components/mainComponents/contact';
import Project from './components/mainComponents/projects';
import Overview from './components/mainComponents/overview';
import Landing from './components/mainComponents/landing';
import Resume from './components/mainComponents/resume';

import { useSelector } from 'react-redux';
import Text3d from './components/mainComponents/Text3d';
import { Fluid } from './components/Fluid/Fluid';
function App() {

    const appNav = useSelector(store => store.appNav.value);

  return (
    <>
      {/* <Fluid /> */}
      
      <Navbar/>
      {/* <div>
        {appNav.navbarOption === "home" && <Landing/>}
        {appNav.navbarOption === "overview" && <Overview />}
        {appNav.navbarOption === "contact" && <Contact />}
        {appNav.navbarOption === "project" && <Project />}
        {appNav.navbarOption === "resume" && <Resume />}
      </div>
      <Footer/>  */}
      {/* <Text3d /> */}
    </>
  );
}

export default App;
