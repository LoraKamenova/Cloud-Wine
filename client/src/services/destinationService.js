const basicUrl = 'http://localhost:5000/api/';

export const getAll = () => {
    let url = basicUrl + 'destinations/all';

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (id) => {
    let url = basicUrl + `destinations/details/${id}`;

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
}
