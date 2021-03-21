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
