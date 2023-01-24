import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/Dashboard/Dashboard";

import CreateGroup from "./pages/Group/CreateGroup";
import EditGroup from "./pages/Group/EditGroup";

import { AuthProvider } from "./context/AuthContext";

import { useAuthentication } from "./hooks/useAuthentication";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState();
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  },[auth])

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route 
                path="/dashboard" 
                element={user ? <DashBoard /> : <Navigate to="/login" />} 
              />

              <Route 
                path="/group/create" 
                element={user ? <CreateGroup /> : <Navigate to="/login" />} 
              />

              <Route 
                path="/register" 
                element={!user ? <Register /> : <Navigate to="/" />} 
              />

              <Route 
                path="/login" 
                element={!user ? <Login /> : <Navigate to="/" />}  
              />
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
