import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { consLogged } from "../const/consLogged";
import { Layout } from "../layout/Layout";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import Sell from "../views/sell/Sell";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import { startRefreshToken } from "../redux/features/auth/thunks";

export const AppRouter = () => {

  const { logged, user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('AppRouter mounted, current logged state:', logged);
    dispatch(startRefreshToken());
    
    const timeout = setTimeout(() => {
      if (logged === consLogged.STARTING) {
        console.log('Timeout reached, forcing NOTLOGGED state');
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  console.log('AppRouter render, logged state:', logged);

  if (logged === consLogged.STARTING) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <div>Cargando aplicación...</div>
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
          Estado: {logged}
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vender" element={<Sell />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>    
  )
}
