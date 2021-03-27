import './DeleteJournal.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";

import * as journalService from "../../../services/journalService";

import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"

const DeleteJournal = ({match}) => {
    const history = useHistory();
    const journalId = match.params.journalId;

    const [journal, setJournal] = useState({});

    useEffect(() => {
        journalService.getOne(journalId)
            .then(res => setJournal(res));
    }, [])

    const onDeleteJournalSubmitHandler = (e) => {
        e.preventDefault();

        journalService.deleteJournal(journalId)
            .then(() => {
                history.push('/profile');
                return null;
            });
    }

    return (
        <section className="form-wrapper delete-journal-form-wrapper">
            <FormHeader title="Изтрий пътепис"/>
            <form className="form-container" onSubmit={onDeleteJournalSubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="title">Заглавие:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="title"
                           name="title"
                           readOnly
                           defaultValue={journal.title}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="place">Място:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="place"
                           name="place"
                           readOnly
                           defaultValue={journal.place}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="time">Време:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="time"
                           name="time"
                           readOnly
                           defaultValue={journal.time}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="description">Описание:</label>
                    </div>
                    <textarea className="form-field-input textarea form-field-input-delete"
                              rows="11"
                              id="description"
                              name="description"
                              readOnly
                              defaultValue={journal.description}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl1">URL снимка 1:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="imageUrl1"
                           name="imageUrl1"
                           readOnly
                           defaultValue={journal.imageUrl1}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl2">URL снимка 2:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="imageUrl2"
                           name="imageUrl2"
                           readOnly
                           defaultValue={journal.imageUrl2}/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗТРИЙ"/>
                </div>

            </form>
        </section>
    );
};

export default DeleteJournal;
