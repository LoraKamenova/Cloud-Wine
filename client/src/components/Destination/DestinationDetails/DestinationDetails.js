import './DestinationDetails.css'
import DestinationDetailsCard from "./DestinationDetailsCard/DestinationDetailsCard";
import {useEffect, useState} from 'react';
import * as destinationService from "../../../services/destinationService";
import {Link} from "react-router-dom";

const DestinationDetails = ({match}) => {

    let [destination, setDestination] = useState({});

    useEffect(() => {
        destinationService.getOne(match.params.destinationId)
            .then(res => setDestination(res));
    }, []);

    return (
        <section className="custom-section destination-details-page">

            <div className="destination-details-section">

                <div className="destination-details-card-wrapper">
                    <DestinationDetailsCard
                        name={destination.name}
                        imageUrl1={destination.imageUrl1}
                        imageUrl2={destination.imageUrl2}
                        mapUrl={destination.mapUrl}
                        address={destination.address}
                        services={destination.services}
                        description={destination.description}
                    />
                </div>

                <div className="destination-details-button-wrapper">
                    <Link className="button edit-button" to={`/destination/edit/${destination._id}`}>Редактирай<i className="fas fa-pencil-alt"></i></Link>
                    <a className="button delete-button" href="#">Изтрий<i className="fas fa-times"></i></a>
                </div>

            </div>

        </section>
    );
};

export default DestinationDetails;
