import './JournalDetails.css'
import JournalDetailsCard from "./JournalDetailsCard/JournalDetailsCard";
import {useContext, useEffect, useState} from "react";
import * as journalService from "../../../services/journalService";
import {Link} from "react-router-dom";
import UserContext from "../../../Context";

const JournalDetails = ({match}) => {
    const context = useContext(UserContext)
    const userId = context.user.id;

    let [journal, setJournal] = useState({});

    useEffect(() => {
        journalService.getOne(match.params.journalId)
            .then(res => setJournal(res));
    }, []);

    let buttons;
    if (userId === journal.creatorId) {
        buttons =
            <div className="jdc-button-wrapper">
            <Link className="button edit-button" to={`/journal/edit/${journal._id}`}>Редактирай<i className="fas fa-pencil-alt"></i></Link>
            <Link className="button delete-button" to={`/journal/delete/${journal._id}`}>Изтрий<i className="fas fa-times"></i></Link>
            </div>
    }

    return (

        <div className="journal-details-section-wrapper">
            <section className="journal-details-section">

                <JournalDetailsCard
                    title={journal.title}
                    place={journal.place}
                    time={journal.time}
                    imageUrl1={journal.imageUrl1}
                    imageUrl2={journal.imageUrl2}
                    description={journal.description}
                />

            </section>
            {buttons}
        </div>
    );
};

export default JournalDetails;
