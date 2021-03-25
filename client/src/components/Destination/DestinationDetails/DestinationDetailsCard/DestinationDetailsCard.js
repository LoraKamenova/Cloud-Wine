import './DestinationDetailsCard.css'

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
                    <img className="destination-details-card-map" src={props.mapUrl} alt="map"/>
                    <div className="text-wrapper">
                        <p className="destination-details-card-address">Адрес: {props.address}</p>
                        <div className="destination-details-card-services">Услуги: {props.services}</div>
                    </div>
                </div>
            </div>
            <div className="destination-details-card-button-wrapper">
                <a className="button edit-button" href="#">Редактирай<i className="fas fa-pencil-alt"></i></a>
                <a className="button delete-button" href="#">Изтрий<i className="fas fa-times"></i></a>
            </div>
        </div>
    );
};

export default DestinationDetailsCard;
