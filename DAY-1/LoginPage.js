import React from 'react';
import './App.css';

function LoginPage() {
    return (
        <body>
        <div>
            <form>
                <h2>
                    "Welcome student !"
                </h2>
                <h1>Login</h1>
                <label htmlFor='username'>Username:</label>
                <input type="text" id='username' required/>

                <label htmlFor='password'>Password:</label>
                <input type="password" id='password' required/>

                <input type="submit"/>
                <h4>dont have an account ?</h4>
            </form>
        </div>
        </body>
    );
}

export default LoginPage;