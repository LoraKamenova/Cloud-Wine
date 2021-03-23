import './WineCard.css'

const WineCard = (props) => {
    return (
        <article className="wine-card">
            <div className="wine-card-image-wrapper">
                <img className="wine-card-image"
                     src={props.imageUrl1} alt="wine item"/>
            </div>
            <div className="wine-card-title-wrapper">
                <h3 className="wine-card-title">{props.name}</h3>
            </div>
        </article>
    );
};

export default WineCard;
