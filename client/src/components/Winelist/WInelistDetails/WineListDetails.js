import './WineListDetails.css';
import {useEffect, useState} from 'react';
import * as wineService from "../../../services/wineService";
import WineListDetailsCard from "./WIneListDetailsCard/WineListDetailsCard";

const WineListDetails = ( {match} ) => {

    let [wine, setWine] = useState({});

    useEffect(() => {
        wineService.getOneWine(match.params.wineListId)
            .then(res => setWine(res));
    }, []);

    return (
        <section className="custom-section wine-list-details-page">

            <div className="wine-list-details-section">
                <WineListDetailsCard
                    name={wine.name}
                    description={wine.description}
                    category={wine.category}
                    producer={wine.producer}
                    imageUrl1={wine.imageUrl1}
                />
            </div>

        </section>
    );
};

export default WineListDetails;
