import './WineDetails.css';
import WineListDetailsCard from "./WIneListDetailsCard/WineListDetailsCard";

import * as wineService from "../../../services/wineService";

import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import UserContext from "../../../Context";

const WineDetails = ({match} ) => {
    const context = useContext(UserContext);
    const role = context.user.role;

    let [wine, setWine] = useState({});

    useEffect(() => {
        wineService.getOne(match.params.wineId)
            .then(res => setWine(res));
    }, []);

    let buttons;
    if (role === "root") {
        buttons = <div className="wine-details-button-wrapper">
            <Link className="button edit-button" to={`/wine/edit/${wine._id}`}>Редактирай<i className="fas fa-pencil-alt"></i></Link>
            <Link className="button delete-button" to={`/wine/delete/${wine._id}`}>Изтрий<i className="fas fa-times"></i></Link>
        </div>;
    }

    return (
        <section className="custom-details-section wine-details-section">
            <div className="wine-details-wrapper">
                <WineListDetailsCard
                    name={wine.name}
                    description={wine.description}
                    category={wine.category}
                    producer={wine.producer}
                    imageUrl1={wine.imageUrl1}
                />
                {buttons}
            </div>
        </section>
    );
};

export default WineDetails;
