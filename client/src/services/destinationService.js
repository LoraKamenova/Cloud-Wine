import getCookie from "../utils/cookie";

const basicUrl = 'http://localhost:5000/api/destinations';

export const getAll = () => {

    return fetch(`${basicUrl}/all`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (destinationId) => {
    return fetch(`${basicUrl}/details/${destinationId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (destinationName, description, address, services, logoUrl, imageUrl1, imageUrl2, mapUrl) => {
    let destination = {
        name: destinationName,
        description: description,
        address: address,
        services: services,
        logoUrl: logoUrl,
        imageUrl1: imageUrl1,
        imageUrl2: imageUrl2,
        mapUrl: mapUrl
    };

    return fetch(`${basicUrl}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(destination)
    });
};

export const update = (destinationId, destination) => {
    return fetch(`${basicUrl}/${destinationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(destination)
    })
}

export const deleteDestination = (destinationId) => {
    return fetch(`${basicUrl}/${destinationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        // body: JSON.stringify(destination)
    })
}
