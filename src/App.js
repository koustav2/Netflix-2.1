/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login';
import { firebaseAuth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './app/features/userSlice';
import Profile from './components/profile/Profile';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubcribe= firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user)
        dispatch(login({
          uid: user.uid,
          email: user.email,
          // displayName: user.displayName,
          // photoUrl: user.photoURL
        }))
      } else {
        // console.log("no user")
        dispatch(logout())
      }
    });

    return unsubcribe;
  }, [dispatch])
  
  return (
    <BrowserRouter>
      <div className="app">
        {
          !user ? (
            <Login />
          ) : (
            <Routes>
              <Route path="/profile" element={<Profile/>} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          )

        }
      </div>
    </BrowserRouter>





  );
}

export default App;
