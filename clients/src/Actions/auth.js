import * as api from "../Api/index";
import { setCurrentUser } from "./currentUser";
export const login = (authData) => async (dispatch) => {
  try {
    console.log(authData);
    const { data } = await api.login(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  } catch (error) {
    alert(error);
  }
};