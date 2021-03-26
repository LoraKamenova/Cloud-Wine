import './WineList.css'
import WineCard from "./WineCard/WineCard";

import * as wineService from "../../../services/wineService";

import {Link} from "react-router-dom";
import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../../Context";

const WineList = () => {
    const context = useContext(UserContext)
    const role = context.user.role;

    const [wines, setWines] = useState([]);

    useEffect(() => {
        wineService.getAll()
            .then(res => setWines(res));
    }, []);

    let button;
    if (role === "root") {
        button = <div className="wine-list-button-wrapper">
            <Link className="button new-item-button" to="/wine/create">Ново вино<i className="fas fa-check"></i></Link>
        </div>;
    }

    return (
        <section className="wine-list-section">
            <div className="wine-list-wrapper">

                <div className="wine-list-header">
                    <span className="wine-list-heading">Всички вина</span>
                    <Link to="/wine/top">
                        <span className="top-wines-heading-button">Избрано</span></Link>
                </div>

                <div className="all-wines-container">
                    {wines.map(x =>
                        <Link key={x.id} {...x} to={`/wine/details/${x._id}`}>
                            <WineCard
                                name={x.name}
                                imageUrl1={x.imageUrl1}
                            />
                        </Link>
                    )}
                </div>

                {button}

            </div>
        </section>
    )
}
export default WineList;
