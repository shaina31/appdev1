import React from 'react';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css'

function MyButton() {
  return (
    <button>I'm a Button</button>
  );
}

export default function MyApp() {
  return (
    <>
      <div>
        <h1>Welcome to My App !</h1>
        {/*
        <MyButton />  // Kindly uncomment to see individual functionality 
        <AboutPage /> // Kindly uncomment to see individual functionality 
        <Profile />   // Kindly uncomment to see individual functionality 
        */}
        <Login />
      </div>
    </>
  );
}