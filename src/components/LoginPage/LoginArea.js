import React, { useState } from 'react';

const LoginArea = () => {
    const handleSubmit = (e) => {
        
          
    }

    const handleChange = (e) => {
        let isValid = true;;
        if (e.target.name === 'email') {
          var re = /\S+@\S+\.\S+/;
          isValid = re.test(e.target.value);
        }
        else if (e.target.name === 'password') {
          isValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
        }
        
      }

    return (
        <div>
                  
      <form onSubmit={handleSubmit}>
        
        <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required />
        <br />
        <input onBlur={handleChange} type="password" name="password" id="" placeholder="Your password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
};

export default LoginArea;