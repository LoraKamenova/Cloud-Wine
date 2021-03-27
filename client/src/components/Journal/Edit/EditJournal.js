import './EditJournal.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";
import InputError from "../../Shared/InputError/InputError";

import * as journalService from "../../../services/journalService";

import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"

const EditJournal = ({match}) => {
    const history = useHistory();
    const journalId = match.params.journalId;

    const [journal, setJournal] = useState({});

    const [errorMessageDescription, setErrorMessageDescription] = useState('');
    const [errorMessageTitle, setErrorMessageTitle] = useState('');

    useEffect(() => {
        journalService.getOne(journalId)
            .then(res => setJournal(res));
    }, [])

    const onEditJournalSubmitHandler = (e) => {
        e.preventDefault();

        let updatedJournal = {
            ...journal,
            title: e.target.title.value,
            description: e.target.description.value,
            place: e.target.place.value,
            time: e.target.time.value,
            imageUrl1: e.target.imageUrl1.value,
            imageUrl2: e.target.imageUrl2.value,
        };

        journalService.update(journalId, updatedJournal)
            .then(() => {
                history.push(`/journal/details/${journalId}`);
                return null;
            });
    }

    const onChangeDescriptionHandler = (e) => {
        if (e.target.value.length < 100) {
            setErrorMessageDescription('Описанието трябва да е минимум 100 символа');
        } else {
            setErrorMessageDescription('');
        }
    };

    const onChangeTitleHandler = (e) => {
        if (e.target.value.length > 55) {
            setErrorMessageTitle('Заглавието трябва да е максимум 55 символа');
        } else {
            setErrorMessageTitle('');
        }
    };

    return (
        <section className="form-wrapper edit-journal-form-wrapper">
            <FormHeader title="Редактирай пътепис"/>
            <form className="form-container" onSubmit={onEditJournalSubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="title">Заглавие:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="title"
                           name="title"
                           required
                           onBlur={onChangeTitleHandler}
                           defaultValue={journal.title}/>
                    <InputError>{errorMessageTitle}</InputError>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="place">Място:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="place"
                           name="place"
                           defaultValue={journal.place}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="time">Време:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="time"
                           name="time"
                           defaultValue={journal.time}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="description">Описание:</label>
                    </div>
                    <textarea className="form-field-input textarea"
                              rows="11"
                              id="description"
                              name="description"
                              required
                              onBlur={onChangeDescriptionHandler}
                              defaultValue={journal.description}/>
                    <InputError>{errorMessageDescription}</InputError>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl1">URL снимка 1:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl1"
                           name="imageUrl1"
                           defaultValue={journal.imageUrl1}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl2">URL снимка 2:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl2"
                           name="imageUrl2"
                           defaultValue={journal.imageUrl2}/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗПРАТИ"/>
                </div>

            </form>
        </section>
    );
};

export default EditJournal;
