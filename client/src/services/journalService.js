const basicUrl = 'http://localhost:5000/api/';

export const getAll = () => {
    let url = basicUrl + 'journals/all';

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
}
