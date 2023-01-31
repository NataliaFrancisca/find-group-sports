import {BrowserRouter, Routes, Route, Navigate, useLocation} from "react-router-dom"

import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/Dashboard/Dashboard";

import { AppStyled, BackgroundFilter } from "./styles/Global.styled";

import CreateGroup from "./pages/CreateGroup/CreateGroup";
import { AuthProvider } from "./context/AuthContext";

import { useAuthentication } from "./hooks/useAuthentication";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState();
  const { auth } = useAuthentication();

  const location = useLocation();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  },[auth])

  return (
    <AppStyled>
      {location.pathname == "/" && <BackgroundFilter />}
      <AuthProvider value={{ user }}>
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
      </AuthProvider>
    </AppStyled>
  );
}

export default App;
