import './AllJournals.css'
import JournalCard from "./JournalCard/JournalCard";
import {Link} from "react-router-dom";

import * as journalService from "../../../services/journalService";

import React, {useState, useEffect} from 'react';

const AllJournals = () => {

    const [journals, setJournals] = useState([]);

    useEffect(() => {
        journalService.getAll()
            .then(res => setJournals(res));
    }, []);

    return (
        <section className="common-all-section journals-section">
            <div className="all-journals-wrapper">

                <img className="peg-image"
                     src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615730431/React%20Project/new_gt98oa.png"
                     width="300px" height="50px" alt="pegs"/>
                <div className="all-journals-heading">Всички пътеписи</div>

                <div className="all-journals-container">
                    {journals.map(x =>
                        <Link key={x.id} {...x} to={`/journal/details/${x._id}`}>
                            <JournalCard
                                title={x.title}
                                imageUrl1={x.imageUrl1}
                            />
                        </Link>
                    )}
                </div>

                <div className="all-journals-button-wrapper">
                    <Link className="button new-item-button" to="/journal/create">Нов пътепис<i className="fas fa-check"></i></Link>
                </div>

            </div>
        </section>
    );
}

export default AllJournals;
