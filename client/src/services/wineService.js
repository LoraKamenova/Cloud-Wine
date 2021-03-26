import getCookie from "../utils/cookie";

const basicUrl = 'http://localhost:5000/api/wines';

export const getAll = () => {
    return fetch(`${basicUrl}/all`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (wineId) => {
    return fetch(`${basicUrl}/details/${wineId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getTop = () => {
    return fetch(`${basicUrl}/top`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (wineName, category, description, producer, imageUrl1) => {
    let wine = {
        name: wineName,
        category: category,
        description: description,
        producer: producer,
        imageUrl1: imageUrl1
    };

    return fetch(`${basicUrl}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(wine)
    });
};

export const update = (wineId, wine) => {
    return fetch(`${basicUrl}/${wineId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(wine)
    })
}

export const deleteWine = (wineId) => {
    return fetch(`${basicUrl}/${wineId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
    })
}
