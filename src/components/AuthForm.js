import React, { useState } from 'react'
import { authService } from 'fbase'


export default function AuthForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState('')

    const onChange = (event) => {
        const { target: { name, value } } = event;

        if (name === 'email') return setEmail(value)
        else if (name === 'password') return setPassword(value);
    }

    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        let data;
        if (newAccount) {
          data = await authService.createUserWithEmailAndPassword(
            email,
            password
          );
        } else {
          data = await authService.signInWithEmailAndPassword(email, password);
        }
        console.log(data); 
      } catch (err) {
        setError(err.message);
      }
    };   

    const toggleAccount = () => setNewAccount((prev) => !prev)
    
    return (
        <>
            <form onSubmit={onSubmit} className='container'>
          <input 
            className='authInput'
            name='email'
            type="text" 
            placeholder="Email" 
            required 
            value={email}
            onChange={onChange}

          />
          <input 
            className='authInput' 
            name='password'
            type="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={onChange}

          />
          <input 
            type="submit" 
            value={newAccount? 'Create Account' : 'Log In'} 
            className='authInput authSubmit'
            />
          {error && <span className='authError'> {error} </span>}
        </form>
        <span className='authSwitch' onClick={toggleAccount}>{newAccount ? 'Sign In' : 'Create Account'}</span>
            
        </>
    )
}
