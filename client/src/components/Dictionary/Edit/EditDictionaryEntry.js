import './EditDictionaryEntry.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";
import InputError from "../../Shared/InputError/InputError";

import * as dictionaryService from "../../../services/dictionaryService";

import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"

const EditDictionaryEntry = ({match}) => {
    const history = useHistory();
    const entryId = match.params.entryId;

    const [entry, setEntry] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        dictionaryService.getOne(entryId)
            .then(res => setEntry(res));
    }, [])

    const onEditDictionaryEntrySubmitHandler = (e) => {
        e.preventDefault();

        let updatedDictionaryEntry = {
            ...entry,
            title: e.target.title.value,
            fullText: e.target.fullText.value,
            shortText: e.target.shortText.value,
            iconWhiteUrl: e.target.iconWhiteUrl.value,
            iconBlackUrl: e.target.iconBlackUrl.value,
            imageUrl: e.target.imageUrl.value,
        };

        dictionaryService.update(entryId, updatedDictionaryEntry)
            .then(() => {
                history.push(`/dictionary/details/${entryId}`);
                return null;
            });
    }

    const onChangeShortTextHandler = (e) => {
        if (e.target.value.length > 120) {
            setErrorMessage('Текстът трябва да е максимум 120 символа');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <section className="form-wrapper edit-dictionary-entry-form-wrapper">
            <FormHeader title="Редактирай термин"/>

            <form className="form-container" onSubmit={onEditDictionaryEntrySubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="title">Заглавие:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="title"
                           name="title"
                           required
                           defaultValue={entry.title}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="fullText">Пълен текст:</label>
                    </div>
                    <textarea className="form-field-input textarea"
                              rows="11"
                              id="fullText"
                              name="fullText"
                              required
                              defaultValue={entry.fullText}/>

                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="shortText">Кратък текст:</label>
                    </div>
                    <textarea className="form-field-input  textarea"
                           rows="2"
                           id="shortText"
                           name="shortText"
                           required
                           onBlur={onChangeShortTextHandler}
                           defaultValue={entry.shortText}/>
                    <InputError>{errorMessage}</InputError>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="iconBlackUrl">URL черна икона:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="iconBlackUrl"
                           name="iconBlackUrl"
                           defaultValue={entry.iconBlackUrl}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="iconWhiteUrl">URL бяла икона:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="iconWhiteUrl"
                           name="iconWhiteUrl"
                           defaultValue={entry.iconWhiteUrl}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl">URL снимка:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl"
                           name="imageUrl"
                           defaultValue={entry.imageUrl}/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗПРАТИ"/>
                </div>

            </form>
        </section>
    );
};

export default EditDictionaryEntry;
