import './DestinationCard.css'

const DestinationCard = (props) => {
    return (
        <article className="destination-card">
            <div className="destination-card-image-wrapper">
                <img className="destination-card-image" src={props.url}/>
            </div>
            <div className="destination-card-info-wrapper">
                <h3 className="destination-info-item destination-card-title"><i className="fab fa-houzz"></i>{props.title}</h3>
                <h3 className="destination-info-item destination-card-address"><i className="fas fa-map-pin"></i>{props.address}</h3>
                <h3 className="destination-info-item destination-card-services"><i className="fas fa-wine-glass-alt"></i>{props.services}</h3>
            </div>
        </article>
    );
};

export default DestinationCard;
