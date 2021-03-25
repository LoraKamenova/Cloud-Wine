import './JournalDetails.css'
import JournalDetailsCard from "./JournalDetailsCard/JournalDetailsCard";
import {useEffect, useState} from "react";
import * as journalService from "../../services/journalService";

const JournalDetails = ( {match} ) => {

    let [journal, setJournal] = useState({});

    useEffect(() => {
        journalService.getOneJournal(match.params.journalId)
            .then(res => setJournal(res));
    }, []);

    return (

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

    );
};

export default JournalDetails;
