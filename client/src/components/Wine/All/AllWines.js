import './AllWines.css'
import WineCard from "./WineCard/WineCard";

import * as wineService from "../../../services/wineService";

import {Link} from "react-router-dom";
import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../../Context";

const AllWines = () => {
    const context = useContext(UserContext);
    const role = context.user.role;

    const [wines, setWines] = useState([]);

    useEffect(() => {
        wineService.getAll()
            .then(res => setWines(res));
    }, []);

    let button;
    if (role === "root") {
        button =
        <div className="all-wines-button-wrapper">
            <Link className="button new-item-button" to="/wine/create">Ново вино<i className="fas fa-check"></i></Link>
        </div>;
    }

    return (
        <section className="common-all-section all-wines-section">
            <div className="all-wines-wrapper">

                <div className="all-wines-header">
                    <Link to="/wine/top">
                        <span className="top-wines-heading-button">Избрано</span></Link>
                    <span className="all-wines-heading">Всички вина</span>
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
export default AllWines;
