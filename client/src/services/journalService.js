import getCookie from "../utils/cookie";

const basicUrl = 'http://localhost:5000/api/journals';

export const getAll = () => {

    return fetch(`${basicUrl}/all`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (journalId) => {
    return fetch(`${basicUrl}/details/${journalId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getMy = (userId) => {
    const data = { id: userId };
    return fetch(`${basicUrl}/my`, {
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

export const create = (title, description, place, time, imageUrl1, imageUrl2, userId) => {
    let journal = {
        title: title,
        description: description,
        place: place,
        time: time,
        imageUrl1: imageUrl1,
        imageUrl2: imageUrl2,
        creatorId: userId
    };

    return fetch(`${basicUrl}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(journal)
    });
};

export const update = (journalId, journal) => {
    return fetch(`${basicUrl}/${journalId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
        body: JSON.stringify(journal)
    })
}

export const deleteJournal = (journalId) => {
    return fetch(`${basicUrl}/${journalId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
    })
}
