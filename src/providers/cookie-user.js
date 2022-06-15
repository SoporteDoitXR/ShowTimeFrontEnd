import Cookies from "universal-cookie";

//variable usable para cookies en todas las funciones
const cookies = new Cookies();

//NOTA: el termino path:"/" quiere decir que es un cookie que se usa
//en cualquier direccion, se puede colocar la direccion, para determinar
// que una cookie solo funciona en una ruta especifica

// Guardar informacion de usuario en cookies
// se usa para la validacion de logIn de usuario
export const saveCookieUser = (name, lastname) => {
  //cookies.set("id", id, { path: "/" });
  cookies.set("name", name, { path: "/" });
  cookies.set("lastname", lastname, { path: "/" });
};

//guardar token en cookie
export const saveToken = (token) => {
  cookies.set("token", token, { path: "/" });
};

//eliminar token de cookies
export const deleteToken = () => {
  cookies.remove("token", { path: "/" });
};

//eliminar usuario de cookies, esto es un logOut de usuario
export const logOutUser = () => {
  cookies.remove("id", { path: "/" });
  cookies.remove("name", { path: "/" });
  cookies.remove("email", { path: "/" });
};

//obtener id del usuario guardado, retorna null si no hay nada
export const getIdUser = () => {
  return cookies.get("id");
};
// Obtener toda la informacion del usuario guardada en cookies, se guarda en un array
export const getUserData = () => {
  const dataUser = {
    name: cookies.get("name"),
    lastname: cookies.get("lastname"),
  };

  return dataUser;
};

//esta funcion solo hace un console log de lo guardado en las cookies, solo es para pruebas
export const logCookies = () => {
  console.log(cookies.get("id"));
  console.log(cookies.get("name"));
  console.log(cookies.get("email"));
};

//guardar token en cookie
export const dayLogIn = (token) => {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate()+1);

  /*reactCookie.save("token", "token-value", {
    expires: tomorrow // Will expire after 24hr from setting (value is in Date object)
  });*/

  cookies.set("dayLogIn", token, { path: "/" }, { expires: tomorrow });
};