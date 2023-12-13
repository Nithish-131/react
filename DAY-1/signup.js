import React from 'react';
import './App.css';

function signup() {
  return (
    <body>
      <div>
        <form>
          <h2>SIGN UP</h2>
          <label htmlFor='fullname'>Full Name:</label>
          <input type="text" id='fullname' required/>

          <label htmlFor='email'>Email:</label>
          <input type="email" id='email' required/>

          <label htmlFor='newPassword'>New Password:</label>
          <input type="password" id='newPassword' required/>

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input type="password" id='confirmPassword' required/>
        <div class="btn">  
          <input type="submit" value="Sign Up"/>
          <input type="button" value="Login"/>
        </div>  
          <h4>already have an account ?</h4>
        </form>
      </div>
    </body>
  );
}

export default signup;