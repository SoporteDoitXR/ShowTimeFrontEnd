const urlApi = "http://localhost:3000/api"; 

export const getUsers = async (token) => {
    return await fetch(`${urlApi}/users/3/5`, {
    method: "GET",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json',
        'x-access-token': token
    },
  });
};

export const createUser = async (token) => {
    return await fetch(`${urlApi}/users/3/5`, {
    method: "POST",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json',
        'x-access-token': token
    },
  });
};
