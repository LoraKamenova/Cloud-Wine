const basicUrl = 'http://localhost:5000/api/journals';

export const getAllJournals = () => {

    return fetch(`${basicUrl}/all`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOneJournal = (journalId) => {
    return fetch(`${basicUrl}/details/${journalId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getMyJournals = (userId) => {
    const data = { id: userId };
    return fetch(`${basicUrl}/my`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}
