import { useState } from 'react';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';
import Login from './components/Login';
import ShoppingList from './components/ShoppingList';
import './App.css'

function MyButton() {
  const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times </button>
  );
}

export default function MyApp() {
  return (
    <>
      <div>
        <h1>Welcome to My App !</h1>
       
        <MyButton /> <br />
        <MyButton />   {/* // Kindly uncomment to see individual functionality 
        <AboutPage /> // Kindly uncomment to see individual functionality 
        <Profile />   // Kindly uncomment to see individual functionality 
        <Login />     // Kindly uncomment to see individual functionality
        <ShoppingList /> // Kindly uncomment to see individual functionality
        */}
      </div>
    </>
  );
}