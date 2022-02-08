const token =
  "dc50af23e0e271dae0ca349d0ebc9f2d5ba6f43367419595a95c34ffe4447736";

/** consulta de todos los usuarios, este api solo da 20 a la vez por temas de paginacion **/
export const getAllUsers = () => {
  return fetch("https://gorest.co.in/public/v1/users/");
};

/** consulta de un usuario en especifico */
export const getUser = (userID) => {
  return fetch(`https://gorest.co.in/public/v1/users?email=${userID}`);
};

/** agregar usuario */
export const postUser = (data) => {
  return fetch("https://gorest.co.in/public/v1/users", {
    method: "POST",
    cache: "no-cache",
    headers: {
      Authorization:
        "Bearer dc50af23e0e271dae0ca349d0ebc9f2d5ba6f43367419595a95c34ffe4447736",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/** editar usuario */
export const editUser = (id, data) => {
  return fetch(`https://gorest.co.in/public/v1/users/${id}`, {
    method: "PUT",
    cache: "no-cache",
    headers: {
      Authorization:
        "Bearer dc50af23e0e271dae0ca349d0ebc9f2d5ba6f43367419595a95c34ffe4447736",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/** DELETE USER */
export const deleteUser = (id) => {
  return fetch(`https://gorest.co.in/public/v1/users/${id}`, {
    method: "DELETE",
    cache: "no-cache",
    headers: {
      Authorization:
        "Bearer dc50af23e0e271dae0ca349d0ebc9f2d5ba6f43367419595a95c34ffe4447736",
    },
  });
};

// dc50af23e0e271dae0ca349d0ebc9f2d5ba6f43367419595a95c34ffe4447736
