import './DestinationDetails.css'
import DestinationDetailsCard from "./DestinationDetailsCard/DestinationDetailsCard";
import {useEffect, useState} from 'react';
import * as destinationService from "../../services/destinationService";

const DestinationDetails = ( {match} ) => {

    let [destination, setDestination] = useState({});

    useEffect(() => {
        destinationService.getOne(match.params.destinationId)
            .then(res => setDestination(res));
    }, []);

    return (
        <section className="custom-section destination-details-page">

                <div className="destination-details-section">

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

        </section>
    );
};

export default DestinationDetails;
