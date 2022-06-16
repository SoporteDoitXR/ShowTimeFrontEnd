export const apiLogin = async (email, password) => {
    return await fetch("http://localhost:3000/api/signin", {
    method: "POST",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({email, password}),
  });
};