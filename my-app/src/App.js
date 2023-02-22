import React from 'react';

import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Contact from './components/mainComponents/contact';
import Projects from './components/mainComponents/projects';
import Landing from './components/mainComponents/landing';
import Resume from './components/mainComponents/resume';

import { useSelector } from 'react-redux';

function App() {

    const appNav = useSelector(store => store.appNav.value);

  return (
    <>
      <div>
        {appNav === "home" && <Landing/>}
        {appNav === "contact" && <Contact />}
        {appNav === "projects" && <Projects />}
        {appNav === "resume" && <Resume />}
      </div>
    </>
  );
}

export default App;
