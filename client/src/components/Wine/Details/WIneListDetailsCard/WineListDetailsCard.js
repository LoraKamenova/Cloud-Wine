import './WineListDetailsCard.css'

const WineListDetailsCard = (props) => {
    return (
        <div className="wine-details-card">

            <section className="wdc-content-section">
                <div className="wdc-image-wrapper">
                    <img className="wdc-image" src={props.imageUrl1} alt="wine pic"/>
                </div>
                <div className="wdc-facts-wrapper">
                    <h2 className="wdc-fact wdc-fact-name">{props.name}</h2>
                    <p className="wdc-fact"><p className="fact-title">Категория:</p> {props.category}</p>
                    <p className="wdc-fact"><p className="fact-title">Производител:</p> {props.producer}</p>
                    <p className="wdc-fact">{props.description}</p>
                </div>

            </section>

        </div>
    );
};

export default WineListDetailsCard;
