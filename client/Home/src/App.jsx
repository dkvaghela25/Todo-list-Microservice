import React, { Suspense, lazy } from "react";
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';

// Dynamically import the remote App component
const RegistrationPage = lazy(() => import("HostRegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("HostLoginPage/LoginPage"));
const LogoutPage = lazy(() => import("HostLogoutPage/LogoutPage"));
const UserDetails = lazy(() => import("HostUserDetails/UserDetails"));
const UpdateUserdetails = lazy(() => import("HostUpdateUserdetails/UpdateUserdetails"));
const DeleteUser = lazy(() => import("HostDeleteUser/DeleteUser"));
const TodoList = lazy(() => import("HostTodoList/TodoList"));

const App = () => (
  <Router>
    <Navbar />
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ borderRadius: "12px", fontSize: "1rem", minWidth: "300px" }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/update-user" element={<UpdateUserdetails />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;