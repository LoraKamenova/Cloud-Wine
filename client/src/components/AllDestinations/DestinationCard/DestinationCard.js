import './DestinationCard.css'

const DestinationCard = (props) => {
    return (
        <article className="destination-card">
            <div className="destination-card-image-wrapper">
                <img className="destination-card-image" src={props.url}/>
            </div>

            <div className="destination-card-info-wrapper">

                <div className="destination-card-line-wrapper">
                    <img className="destination-card-pic" src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189586/React%20Project/house_nwweqf.png" />
                    <h3 className="destination-info-item destination-card-title">{props.title}</h3>
                </div>

                <div className="destination-card-line-wrapper">
                    <img className="destination-card-pic" src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189587/React%20Project/push-pin_hopc61.png" />
                    <h3 className="destination-info-item destination-card-address">{props.address}</h3>
                </div>

                <div className="destination-card-line-wrapper">
                    <img className="destination-card-pic" src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616199816/React%20Project/info_rg32io.png" />
                    <h3 className="destination-info-item destination-card-services">{props.services}</h3>
                </div>

            </div>
        </article>
    );
};

export default DestinationCard;
