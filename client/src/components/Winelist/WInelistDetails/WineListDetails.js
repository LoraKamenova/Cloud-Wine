import './WineListDetails.css';
import {useContext, useEffect, useState} from 'react';
import * as wineService from "../../../services/wineService";
import WineListDetailsCard from "./WIneListDetailsCard/WineListDetailsCard";
import {Link} from "react-router-dom";
import UserContext from "../../../Context";

const WineListDetails = ( {match} ) => {
    const context = useContext(UserContext)
    const role = context.user.role;

    let [wine, setWine] = useState({});

    useEffect(() => {
        wineService.getOne(match.params.wineId)
            .then(res => setWine(res));
    }, []);

    let buttons;
    if (role === "root") {
        buttons = <div className="wdc-button-wrapper">
            <Link className="button edit-button" to={`/wine/edit/${wine._id}`}>Редактирай<i className="fas fa-pencil-alt"></i></Link>
            <Link className="button delete-button" to={`/wine/delete/${wine._id}`}>Изтрий<i className="fas fa-times"></i></Link>
        </div>;
    }

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
                {buttons}
            </div>
        </section>
    );
};

export default WineListDetails;
