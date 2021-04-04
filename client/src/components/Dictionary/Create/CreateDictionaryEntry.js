import './CreateDictionaryEntry.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";
import InputError from "../../Shared/InputError/InputError";

import * as dictionaryService from "../../../services/dictionaryService";

import {useHistory} from "react-router-dom"
import React, {useState} from "react";

const CreateDictionaryEntry = () => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const onCreateDictionaryEntrySubmitHandler = (e) => {
        e.preventDefault();

        const {
            title,
            fullText,
            shortText,
            iconWhiteUrl,
            iconBlackUrl,
            imageUrl,
        } = e.target;

        dictionaryService.create(
            title.value,
            fullText.value,
            shortText.value,
            iconWhiteUrl.value,
            iconBlackUrl.value,
            imageUrl.value,
         )
            .then(() => {
                history.push('/dictionary/all')
            })
    };

    const onChangeShortTextHandler = (e) => {
        if (e.target.value.length > 80) {
            setErrorMessage('Текстът трябва да е максимум 80 символа');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <section className="form-wrapper add-dictionary-entry-form-wrapper">
            <FormHeader title="Нов термин"/>

            <form className="form-container" onSubmit={onCreateDictionaryEntrySubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="title">Заглавие:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="title"
                           name="title"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="fullText">Пълен текст:</label>
                    </div>
                    <textarea className="form-field-input textarea"
                              rows="11"
                              id="fullText"
                              name="fullText"
                              required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="shortText">Кратък текст:</label>
                    </div>
                    <textarea className="form-field-input textarea"
                              rows="2"
                              id="shortText"
                              name="shortText"
                              required
                              onBlur={onChangeShortTextHandler}/>
                    <InputError>{errorMessage}</InputError>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="iconBlackUrl">URL черна иконка:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="iconBlackUrl"
                           name="iconBlackUrl"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="iconWhiteUrl">URL бяла икона:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="iconWhiteUrl"
                           name="iconWhiteUrl"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl">URL снимка:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl"
                           name="imageUrl"
                           required/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗПРАТИ"/>
                </div>

            </form>
        </section>
    );
};

export default CreateDictionaryEntry;
