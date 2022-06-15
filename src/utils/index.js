import { tokenRefreshAuth } from "../providers/auth";
import { saveToken } from "../providers/cookie-user";
export const tokenRefresh = async (token) => {
  if(token){
    await tokenRefreshAuth(token)
    .then((data) => data.json())
    .then((response) => {
      if (response.token) {
        console.log(response);
        saveToken(response.token);
        return true;
      } else {
        return false;
      }
    });
  }else{
      return false;
  }
};