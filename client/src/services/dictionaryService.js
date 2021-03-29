import getCookie from "../utils/cookie";

const basicUrl = 'http://localhost:5000/api/dictionary';

export const getAll = () => {
    return fetch(`${basicUrl}/all`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (entryId) => {
    return fetch(`${basicUrl}/details/${entryId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (title, fullText, shortText, iconWhiteUrl, iconBlackUrl, imageUrl) => {
    let entry = {
        title: title,
        fullText: fullText,
        shortText: shortText,
        iconWhiteUrl: iconWhiteUrl,
        iconBlackUrl: iconBlackUrl,
        imageUrl: imageUrl,
    };

    return fetch(`${basicUrl}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(entry)
    });
};

export const update = (entryId, entry) => {
    return fetch(`${basicUrl}/${entryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(entry)
    })
}

export const deleteEntry = (entryId) => {
    return fetch(`${basicUrl}/${entryId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        // body: JSON.stringify(destination)
    })
}
