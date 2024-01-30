import { configureStore   } from '@reduxjs/toolkit';
import  { userReducer } from './reducers/user'

const Store = configureStore({
    reducer: {
        user: userReducer
    }
   
})
 console.log(Store)

export default Store;