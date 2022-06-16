const urlApi = "http://localhost:3000/api"; 

export const getMeetings = async () => {
    return await fetch(`${urlApi}/meeting/0/20`, {
    method: "GET",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json',
    },
  });
};

export const getMeetingById = async (id) => {
  return await fetch(`${urlApi}/meeting/${id}`, {
  method: "GET",
  cache: "no-cache",
  headers: {
      'Content-type': 'application/json',
  },
});
};