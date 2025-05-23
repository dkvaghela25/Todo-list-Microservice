import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserDetails from './pages/UserDetails/UserDetails';
import UpdateUserdetails from './pages/UpdateUserdetails/UpdateUserdetails';
import DeleteUser from './pages/DeleteUser/DeleteUser';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
          <ToastContainer />
      This is the User App
    </>
  );
}

export default App;