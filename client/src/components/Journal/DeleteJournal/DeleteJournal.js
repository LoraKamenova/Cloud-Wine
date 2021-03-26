import './DeleteJournal.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import * as journalService from "../../../services/journalService";

import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"

const DeleteJournal = ( { match } ) => {
    const history = useHistory();
    let journalId = match.params.journalId;

    const [journal, setJournal] = useState({});

    useEffect(() => {
        journalService.getOne(journalId)
            .then(res => setJournal(res));
    }, [])

    const onDeleteJournalSubmitHandler = (e) => {
        e.preventDefault();


        journalService.deleteJournal(journalId)
            .then(() => {
                history.push('/journal/all');
                return null;
            });
    }

    return (
        <section className="general-form-wrapper delete-journal-form-wrapper">
            <FormHeader title="Изтрий пътепис"/>

            <form className="general-form" onSubmit={onDeleteJournalSubmitHandler}>
                <section className="general-form-main-section">

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="title">Заглавие:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="title"
                               name="title"
                               readOnly
                               defaultValue={journal.title}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="place">Място:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="place"
                               name="place"
                               readOnly
                               defaultValue={journal.place}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="time">Време:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="time"
                               name="time"
                               readOnly
                               defaultValue={journal.time}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="description">Описание:</label>
                        </div>
                        <textarea className="general-form-field-input delete-input"
                                  rows="11"
                                  id="description"
                                  name="description"
                                  readOnly
                                  defaultValue={journal.description}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl1">URL снимка 1:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="imageUrl1"
                               name="imageUrl1"
                               readOnly
                               defaultValue={journal.imageUrl1}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl2">URL снимка 2:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="imageUrl2"
                               name="imageUrl2"
                               readOnly
                               defaultValue={journal.imageUrl2}/>
                    </div>
                </section>

                <div className="general-form-button-wrapper">
                    <input className="general-form-button" type="submit" value="ИЗПРАТИ"/>
                </div>
            </form>
        </section>
    );
};

export default DeleteJournal;
