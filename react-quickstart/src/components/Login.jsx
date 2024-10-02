import React from 'react';

function LoginForm() {
    return (
        <p> Please login. </p>
    )
}

function AdminPanel() {
    return (
        <p> You are Logged In. </p>
    )
}

let isLoggedIn = true;
let isLoggedOut = false;

export default function Login() {
return(
<div>
  {isLoggedIn && <AdminPanel />}
</div>
);
}