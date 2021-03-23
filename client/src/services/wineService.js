const basicUrl = 'http://localhost:5000/api/wines';

export const getAllWines = () => {
    return fetch(`${basicUrl}/all`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOneWine = (wineId) => {
    return fetch(`${basicUrl}/details/${wineId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getTopWines = () => {
    return fetch(`${basicUrl}/random`)
        .then(res => res.json())
        .catch(error => console.log(error));
}
