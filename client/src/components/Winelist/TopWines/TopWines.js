import './TopWines.css'
import WineCard from "../WinelistPage/WineCard/WineCard";

import * as wineService from "../../../services/wineService";

import {Link} from "react-router-dom";
import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../../Context";

const TopWines = () => {
    const context = useContext(UserContext)
    const role = context.user.role;

    const [wines, setWines] = useState([]);

    useEffect(() => {
        wineService.getTop()
            .then(res => setWines(res));
    }, []);

    return (
        <section className="top-wines-section">
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
    );
}

export default TopWines;
