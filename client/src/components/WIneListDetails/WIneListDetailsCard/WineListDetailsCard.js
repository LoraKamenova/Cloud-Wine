import './WineListDetailsCard.css'

const WineListDetailsCard = (props) => {
    return (
        <div className="wine-list-details-card">

            <section className="wdc-content-section">
                <div className="wdc-image-wrapper">
                    <img className="wdc-image" src={props.imageUrl1} alt="wine pic"/>
                </div>
                <div className="wdc-facts-wrapper">
                    <h2 className="wdc-fact">{props.name}</h2>
                    <p className="wdc-fact"><p className="fact-title">Категория:</p> {props.category}</p>
                    <p className="wdc-fact"><p className="fact-title">Производител:</p> {props.producer}</p>
                    <p className="wdc-fact">{props.description}</p>
                </div>

            </section>

            <div className="wdc-button-wrapper">
                <a className="button edit-button" href="#">Редактирай<i className="fas fa-pencil-alt"></i></a>
                <a className="button delete-button" href="#">Изтрий<i className="fas fa-times"></i></a>
            </div>
        </div>
    );
};

export default WineListDetailsCard;
