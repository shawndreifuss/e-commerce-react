import React from 'react'
import axios from 'axios'
import { server } from '../server'
import { useEffect } from 'react'


const ProductsPage = () => {

  useEffect(() => {
    axios.get(`${server}/api/user/getuser`
    )
    
     .then(res => {
       console.log(res.data)
      toast.success(`Welcome ${res.data.username}`)
     })
     
     .catch(err => console.log(err))
   }, []);
  return (
<>products</>
  )
}

export default ProductsPage