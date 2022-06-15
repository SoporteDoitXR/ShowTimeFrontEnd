export const apiSendEmail = async (email, subject, text) => {
    return await fetch("http://localhost:3000/api/email", {
    method: "POST",
    cache: "no-cache",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({email, subject, text}),
  });
};
