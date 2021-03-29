import './AllDictionaryEntries.css'
import RedDictionaryCard from "./DictionaryCard/RedDictionaryCard/RedDictionaryCard";
import WhiteDictionaryCard from "./DictionaryCard/WhiteDictionaryCard/WhiteDictionaryCard";

import * as dictionaryService from "../../../services/dictionaryService";

import {Link} from "react-router-dom";
import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../../Context";

const AllDictionaryEntries = () => {

    const context = useContext(UserContext);
    const role = context.user.role;

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        dictionaryService.getAll()
            .then(res => setEntries(res));
    }, []);


    let button;
    if (role === "root") {
        button =
            <div className="all-destinations-button-wrapper">
                <Link className="button new-item-button" to="/dictionary/create">Нова дестинация<i className="fas fa-check"></i></Link>
            </div>;
    }

    return (

        <section className="common-all-section dictionary-section">

            <div className="dictionary-wrapper">
                <div className="books-image-wrapper">
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993155/React%20Project/brown_dict_k2ybth.png"
                         width="70px" height="50px" alt="book"/>
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993156/React%20Project/red_dict_a37bhx.png"
                         width="100px" height="70px" alt="bigger book"/>
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993155/React%20Project/brown_dict_k2ybth.png"
                         width="70px" height="50px" alt="book"/>
                </div>

                <div className="dictionary-header">Винен речник</div>

                <div className="dictionary-cards-container">
                    {entries.map((x, index) => ((index % 2 !== 0) ?
                            <RedDictionaryCard key={x._id} {...x}
                                               title={x.title}
                                               iconUrl={x.iconWhiteUrl}
                                               shortText={x.shortText}
                                               link={`/dictionary/details/${x._id}`}
                            />
                            :
                            <WhiteDictionaryCard key={x._id} {...x}
                                                 title={x.title}
                                                 iconUrl={x.iconBlackUrl}
                                                 shortText={x.shortText}
                                                 link={`/dictionary/details/${x._id}`}
                            />
                        )
                    )}
                </div>
                {button}
            </div>
        </section>
    );
};

export default AllDictionaryEntries;
