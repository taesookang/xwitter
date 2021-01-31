import React, { useState, useEffect } from 'react'
import AppRouter from './Router'
import { authService } from 'fbase'

function App() {
  const [init, setInit] = useState(false)
  const [userObj, setUserObj] = useState(null)

  

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        console.log(user.photoURL)
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photo: user.photoURL,
          updateProfile: (args) => user.updateProfile(args)
        })
      }
      else { 
        setUserObj(null);
      }
      setInit(true);
    });
  }, [])


  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      photo: user.photoURL,
      updateProfile: (args) => user.updateProfile(args)
    });
  }

  return (
    <div className="App">
      {init ? <AppRouter 
        refreshUser={refreshUser}
        isLoggedIn={Boolean(userObj)} 
        userObj={userObj}
        /> 
        : 'Loading...'}
      <footer>&copy; {new Date().getFullYear()} Xwitter  </footer>
    </div>
  );
}

export default App;
