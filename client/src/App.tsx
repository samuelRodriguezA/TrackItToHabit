import {BrowserRouter, Routes, Route} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {ProtectedRoute } from  './components/protectedRoute';
import {auth} from './firebase'

import {Home} from "./pages/home";
import {Login} from "./pages/login";
import {Dashboard} from "./pages/dashboard";

import "./App.css"
import { useEffect, useState } from "react";

function App(){
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);

    });
return () => unsuscribe(); 
}, []);

if (isFetching){
  return <h2>Loading...</h2>
}
  return(
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home ></Home>}/>
      <Route index path='/login' element={<Login user={user}></Login>}/>
      <Route index path='/dashboard' element={
      <ProtectedRoute user={user}>
        <Dashboard />
      </ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;