import './TopWines.css'
import WineCard from "../All/WineCard/WineCard";

import * as wineService from "../../../services/wineService";

import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';

const TopWines = () => {
    const [wines, setWines] = useState([]);

    useEffect(() => {
        wineService.getTop()
            .then(res => setWines(res));
    }, []);

    return (
        <section className="common-all-section top-wines-section">
            <div className="top-wines-wrapper">

                <div className="top-wines-header">
                    <span className="top-wines-heading">Избрано</span>
                    <Link to="/wine/all">
                        <span className="all-wines-heading-button">Всички вина</span></Link>
                </div>

                <div className="top-wines-container">
                    {wines.map(x =>
                        <Link key={x.id} {...x} to={`/wine/details/${x._id}`}>
                            <WineCard
                                name={x.name}
                                imageUrl1={x.imageUrl1}
                            />
                        </Link>
                    )}
                </div>

            </div>
        </section>
    )
}

export default TopWines;
