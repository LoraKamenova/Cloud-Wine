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
