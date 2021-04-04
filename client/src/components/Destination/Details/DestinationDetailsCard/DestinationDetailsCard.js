import './DestinationDetailsCard.css'
import {Link} from "react-router-dom";

const DestinationDetailsCard = (props) => {

    return (
        <div className="destination-details-card">

            <h1 className="ddc-heading">{props.name}</h1>

            <p className="ddc-description">
                <img className="ddc-floating-image" src={props.imageUrl1} alt="destination"/>
                {props.description}</p>

            <img className="ddc-non-floating-image" src={props.imageUrl2} alt="destination"/>

            <div className="ddc-map-and-info-wrapper">
                <img className="ddc-map" src={props.mapUrl} alt="map"/>

                <div className="ddcs-info-wrapper">
                    <div className="ddc-address-services-wrapper">
                        <p className="ddc-info-subtitle">Адрес:</p>
                        <p className="ddc-address"> {props.address}</p>
                        <p className="ddc-info-subtitle">Услуги:</p>
                        <p className="ddc-services"> {props.services}</p>
                    </div>

                    <div className="forecast-button-wrapper">
                        <Link className="forecast-button" to={props.link}>
                            7-дневна прогноза за времето в района
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsCard;
