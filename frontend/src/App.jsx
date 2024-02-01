import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar/Navbar';
import ActivationPage from './pages/ActivationPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/Homepage';
import ProductsPage from './pages/ProductsPage';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import ProfilePage from './pages/ProfilePage';



 function App() {
 const [ isUserAuth , setIsUserAuth ] = useState('')


  useEffect(() => {
   Store.dispatch(loadUser())
   const authenticated = Store.getState().user.isAuthenticated
    setIsUserAuth(authenticated)
    }, [isUserAuth])

  return (
    <BrowserRouter>
      <>
   <Navbar  />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path="/activation/:activationToken" element={<ActivationPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/product/:productId" element={<SingleProduct/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/profile" element={<ProfilePage/>} />
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
        </>
    
      
    </BrowserRouter>

  );
}

export default App;