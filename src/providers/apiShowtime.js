const urlApi = "http://localhost:3000/api"; 

export const getShowtimes = async (token) => {
    return await fetch(`${urlApi}/showtime/1/10`, {
    method: "GET",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json',
        'x-access-token': token
    },
  });
};