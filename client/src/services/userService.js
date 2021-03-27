import getCookie from "../utils/cookie";

const basicUrl = 'http://localhost:5000/api/user';

export const getOne = (userId) => {
    const data = { id: userId };
    return fetch(`${basicUrl}/getOne`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}
