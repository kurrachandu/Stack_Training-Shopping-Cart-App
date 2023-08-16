import FormInput from "./FormInput";
import '../Prelogin/App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Create = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      identifier: "", 
      password: ""
    });

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        const userData = existingData.find(data => 
          data.username === values.identifier || data.email === values.identifier
        );

        if (!userData || userData.password !== values.password) {
          alert('Invalid credentials');
          return;
        }
        
        navigate('/home'); 
    };
  
    const onChange = (e) =>
     {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
  
          <FormInput
            name="identifier" // Changed to "identifier"
            type="text"
            placeholder="Username or Email" 
            errorMessage="Username or email should be valid"
            label="Username or Email" // Updated label
            required={true}
            value={values.identifier}
            onChange={onChange}
          />
  
          <FormInput
            name="password"
            type="password" 
            placeholder="Password"
            errorMessage="Password should be 8 characters"
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            label="Password"
            required={true}
            value={values.password}
            onChange={onChange}
          />
          <button  className = "btn" type="submit">Login</button>
          <p className = "Login-btn" onClick={() => navigate("/login")}>Don't have an account? Register Here</p>
        </form>
      </div>
    );
};

export default Create;
