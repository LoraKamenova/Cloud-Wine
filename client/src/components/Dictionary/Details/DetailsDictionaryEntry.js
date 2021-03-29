import './DetailsDictionaryEntry.css'
import DictionaryEntry from "../Details/DictionaryEntry/DictionaryEntry";

import * as dictionaryService from "../../../services/dictionaryService";

import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import UserContext from "../../../Context";


const DetailsDictionaryEntry = ({match}) => {
    const context = useContext(UserContext)
    const role = context.user.role;

    let [entry, setEntry] = useState({});

    useEffect(() => {
        dictionaryService.getOne(match.params.entryId)
            .then(res => setEntry(res));
    }, []);

    let buttons;
    if (role === "root") {
        buttons =
            <div className="dictionary-entry-details-button-wrapper">
                <Link className="button edit-button" to={`/dictionary/edit/${entry._id}`}>Редактирай<i
                    className="fas fa-pencil-alt"></i></Link>
                <Link className="button delete-button" to={`/dictionary/delete/${entry._id}`}>Изтрий<i
                    className="fas fa-times"></i></Link>
            </div>;
    }

    return (
        <section className="dictionary-pages">
            <div className="dictionary-details-container">
                <DictionaryEntry
                    title={entry.title}
                    imageUrl={entry.imageUrl}
                    fullText={entry.fullText}
                />
                {buttons}
            </div>
        </section>
    );
};

export default DetailsDictionaryEntry;
