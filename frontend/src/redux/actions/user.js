import axios from "axios";
import { server } from "../../server";

//  Load User Action
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get(`${server}/api/user/getuser`,
    {
      withCredentials: true,
      
    });
    
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
  
};

export const logout = () => async (dispatch) => { 
  try {
    dispatch({ type: "LogoutRequest" });

    const { data } = await axios.get(`${server}/api/user/logout`,
    
    {
      withCredentials: true,
      
    });
    
    dispatch({
      type: "LogoutSuccess",
      payload: data.user,

    }) 
  } catch (error) {
    dispatch({
      type: "LogoutFail",
      payload: error.response.data.message,
    });
  }
}

