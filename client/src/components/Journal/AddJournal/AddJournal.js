import './AddJournal.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import * as journalService from "../../../services/journalService";
import InputError from "../../Other/InputError/InputError";

import {useHistory} from "react-router-dom"

import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../../Context";

const AddJournal = () => {
    const history = useHistory();
    const context = useContext(UserContext)
    const userId = context.user.id;

    const [errorMessageDescription, setErrorMessageDescription] = useState('');
    const [errorMessageTitle, setErrorMessageTitle] = useState('');

    const onCreateJournalSubmitHandler = (e) => {
        e.preventDefault();

        const {
            title,
            description,
            place,
            time,
            imageUrl1,
            imageUrl2,
        } = e.target;

        journalService.create(
            title.value,
            description.value,
            place.value,
            time.value,
            imageUrl1.value,
            imageUrl2.value,
            userId)
            .then(() => {
                history.push('/journal/all')
            })
    };

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
        <section className="general-form-wrapper add-journal-form-wrapper">

            <FormHeader title="Нов пътепис"/>

            <form className="general-form" onSubmit={onCreateJournalSubmitHandler}>

                <section className="general-form-main-section">

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="title">Заглавие:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="title"
                               name="title"
                               required
                               onBlur={onChangeTitleHandler}/>
                        <InputError>{errorMessageTitle}</InputError>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="place">Място:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="place"
                               name="place"
                               required/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="time">Време:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="time"
                               name="time"
                               required/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="description">Текст:</label>
                        </div>
                        <textarea className="general-form-field-input"
                                  rows="11"
                                  id="description"
                                  name="description"
                                  required
                                  onBlur={onChangeDescriptionHandler}
                            />
                        <InputError>{errorMessageDescription}</InputError>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl1">URL снимка 1:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="imageUrl1"
                               name="imageUrl1"
                               required/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl2">URL снимка 2:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="imageUrl2"
                               name="imageUrl2"
                               required/>
                    </div>

                </section>

                <div className="general-form-button-wrapper">
                    <input className="general-form-button" type="submit" value="ИЗПРАТИ"/>
                </div>
            </form>
        </section>
    );
};

export default AddJournal;
