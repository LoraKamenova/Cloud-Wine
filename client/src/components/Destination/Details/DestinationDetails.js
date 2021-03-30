import './DestinationDetails.css'
import DestinationDetailsCard from "./DestinationDetailsCard/DestinationDetailsCard";

import * as destinationService from "../../../services/destinationService";

import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import UserContext from "../../../Context";
import DestinationCard from "../All/DestinationCard/DestinationCard";

const DestinationDetails = ({match}) => {
    const context = useContext(UserContext)
    const role = context.user.role;

    let [destination, setDestination] = useState({});

    useEffect(() => {

        destinationService.getOne(match.params.destinationId)
            .then(res => setDestination(res));

    }, []);

    let buttons;
    if (role === "root") {
        buttons =
            <div className="destination-details-button-wrapper">
                <Link className="button edit-button" to={`/destination/edit/${destination._id}`}>Редактирай<i
                    className="fas fa-pencil-alt"></i></Link>
                <Link className="button delete-button" to={`/destination/delete/${destination._id}`}>Изтрий<i
                    className="fas fa-times"></i></Link>
            </div>;
    }

    return (

        <section className="custom-details-section destination-details-section">

            <div className="destination-details-wrapper">

                <DestinationDetailsCard
                    name={destination.name}
                    imageUrl1={destination.imageUrl1}
                    imageUrl2={destination.imageUrl2}
                    mapUrl={destination.mapUrl}
                    address={destination.address}
                    services={destination.services}
                    description={destination.description}
                    link={`/destination/forecast/${destination.lat}/${destination.lon}`}
                />
                {buttons}
            </div>
        </section>
    );
};

export default DestinationDetails;
