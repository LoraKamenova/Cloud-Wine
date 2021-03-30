import './DestinationDetailsCard.css'
import {Link} from "react-router-dom";

const DestinationDetailsCard = (props) => {
    return (
        <div className="destination-details-card">

            <header className="destination-details-card-header">
                <h1 className="destination-details-card-heading">{props.name}</h1>
            </header>

            <p className="destination-details-card-text">
                <img className="destination-details-card-image floating-image" src={props.imageUrl1} alt="destination"/>
                {props.description}</p>

            <div className="pic-and-info-wrapper">
                <img className="destination-details-card-image non-floating-image" src={props.imageUrl2} alt="destination"/>

                <div className="info-wrapper">
                    <div className="destination-details-card-services">Услуги: {props.services}</div>
                    <img className="destination-details-card-map" src={props.mapUrl} alt="map"/>
                    <div className="destination-details-card-text-wrapper">
                        <p className="destination-details-card-address">Адрес: {props.address}</p>
                    </div>
                </div>
            </div>
            <div className="forecast-button-wrapper">
                <Link  className="forecast-button" to={props.link}>
                    7-дневна прогноза за времето в района
                </Link>
            </div>
        </div>
    );
};

export default DestinationDetailsCard;
