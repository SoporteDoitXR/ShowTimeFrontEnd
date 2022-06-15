import { v4 as uuid } from 'uuid';
export const apiRegister = async (name, lastName, email, tel) => {
    let documentId = uuid();
    let userName = uuid();
    let password = "";
    let date = new Date();
    let img = "";
    let state = 1;
    return await fetch("http://localhost:3000/api/users", {
      method: "POST",
      cache: "no-cache",
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({documentId, userName, email, name, lastName, tel, password, date, img, state}),
    });
};