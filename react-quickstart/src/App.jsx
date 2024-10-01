import React from 'react';
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
        <MyButton />
      </div>
    </>
  );
}