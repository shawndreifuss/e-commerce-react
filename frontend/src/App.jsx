import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar';
import ActivationPage from './pages/ActivationPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/Homepage';
import ProductsPage from './pages/ProductsPage';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';



 function App() {
  useEffect(() => {
   Store.dispatch(loadUser())
  }
  
  , [])


  return (
    <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path="/activation/:activationToken" element={<ActivationPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover
        them="dark"
        />
    </BrowserRouter>

  );
}

export default App;