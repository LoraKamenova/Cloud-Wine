import './DeleteDictionaryEntry.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";

import * as dictionaryService from "../../../services/dictionaryService";

import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"

const DeleteDictionaryEntry = ({match}) => {
    const history = useHistory();
    const entryId = match.params.entryId;

    const [entry, setEntry] = useState({});

    useEffect(() => {
        dictionaryService.getOne(entryId)
            .then(res => setEntry(res));
    }, [])

    const onDeleteDictionaryEntrySubmitHandler = (e) => {
        e.preventDefault();

        dictionaryService.deleteEntry(entryId)
            .then(() => {
                history.push('/dictionary/all');
                return null;
            });
    }

    return (
        <section className="form-wrapper delete-dictionary-entry-form-wrapper">
            <FormHeader title="Изтрий термин"/>

            <form className="form-container" onSubmit={onDeleteDictionaryEntrySubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="title">Заглавие:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="title"
                           name="title"
                           readOnly
                           defaultValue={entry.title}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="fullText">Пълен текст:</label>
                    </div>
                    <textarea className="form-field-input textarea form-field-input-delete"
                              rows="11"
                              id="fullText"
                              name="fullText"
                              readOnly
                              defaultValue={entry.fullText}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="shortText">Кратък текст:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="shortText"
                           name="shortText"
                           readOnly
                           defaultValue={entry.shortText}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="iconBlackUrl">URL черна икона::</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="iconBlackUrl"
                           name="iconBlackUrl"
                           readOnly
                           defaultValue={entry.iconBlackUrl}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="iconWhiteUrl">URL бяла икона::</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="iconWhiteUrl"
                           name="iconWhiteUrl"
                           readOnly
                           defaultValue={entry.iconWhiteUrl}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl">URL снимка:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="imageUrl"
                           name="imageUrl"
                           readOnly
                           defaultValue={entry.imageUrl}/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗТРИЙ"/>
                </div>

            </form>
        </section>
    );
};

export default DeleteDictionaryEntry;
