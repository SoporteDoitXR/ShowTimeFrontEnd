export const verifyToken = async () => {
    return await fetch("http://localhost:3000/api/signin", {
    method: "POST",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({email, password}),
  });
};

export const tokenRefreshAuth = async (token) => {
    return await fetch("http://localhost:3000/api/tokenRefresh", {
    method: "POST",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json',
        'x-access-token': token
    },
  });
};