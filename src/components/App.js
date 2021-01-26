import React, { useState, useEffect } from 'react'
import AppRouter from './Router'
import { authService } from 'fbase'

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj(user)
      }
      else { setIsLoggedIn(false); }
      setInit(true);
    });
  }, [])

  // setInterval(() => {
  //   console.log(authService.currentUser)
  // }, 3000);
  return (
    <div className="App">
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : 'Loading...'}
      <footer>&copy; {new Date().getFullYear()} Xwitter  </footer>
    </div>
  );
}

export default App;
