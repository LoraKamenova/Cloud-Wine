import './AllDestinations.css'
import DestinationCard from "./DestinationCard/DestinationCard"
import {Link, useHistory} from "react-router-dom";
import * as destinationService from '../../../services/destinationService';

import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../../Context";

const AllDestinations = () => {
    const context = useContext(UserContext)
    const role = context.user.role;

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        destinationService.getAll()
            .then(res => setDestinations(res));
    }, []);


    let button;
    if (role === "root") {
        button = <div className="all-destinations-button-wrapper">
            <Link className="button new-item-button" to="add-destination">Нова дестинация<i className="fas fa-check"></i></Link>
        </div>;
    }

    return (

        <section className="all-destinations-section">

            <div className="all-destinations-wrapper">

                <div className="suitcase-image-wrapper">
                    <img className="suitcase-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615768194/React%20Project/suitcase_mch1ru.png"
                         width="70px" height="50px" alt="suitcase"/>
                    <img className="suitcase-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615768194/React%20Project/suitcase_mch1ru.png"
                         width="100px" height="70px" alt="bigger suitcase"/>
                    <img className="suitcase-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615768194/React%20Project/suitcase_mch1ru.png"
                         width="70px" height="50px" alt="suitcase"/>
                </div>

                <div className="all-destinations-header">Всички дестинации</div>

                <div className="all-destinations-container">

                    {destinations.map((x) => (
                        <Link key={x._id} {...x} to={`/destination/details/${x._id}`}>
                            <DestinationCard
                                title={x.name}
                                address={x.address}
                                services={x.services}
                                logoUrl={x.logoUrl}
                            />
                        </Link>
                        )
                    )}

                </div>
                {button}
            </div>

        </section>

    );
}

export default AllDestinations;
