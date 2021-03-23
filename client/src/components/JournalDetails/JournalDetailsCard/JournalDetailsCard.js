import './JournalDetailsCard.css'

const JournalDetailsCard = (props) => {
    return (
        <div className="journal-details-card">

            <header className="journal-details-card-header">
                <h1 className="journal-details-card-heading">{props.title}</h1>
            </header>

            <div className="journal-details-card-wrapper">
                <h3 className="journal-details-card-subheading">Къде ходихме</h3>
                <div className="journal-details-card-text">{props.place}</div>
            </div>

            <div className="journal-details-card-wrapper">
                <h3 className="journal-details-card-subheading">Кога отидохме</h3>
                <div className="journal-details-card-text">{props.time}</div>
            </div>

            <div className="journal-details-card-wrapper">
                <h3 className="journal-details-card-subheading">Какво правихме</h3>
                <div className="journal-details-card-text">{props.description}</div>
            </div>

            <div className="journal-details-card-image-wrapper">
                <h3 className="journal-details-card-subheading description-heading">Какво снимахме</h3>
                <div className="journal-details-card-image-container">
                    <img className="journal-details-card-image" src={props.imageUrl1} alt="journal"/>
                    <img className="journal-details-card-image" src={props.imageUrl2} alt="journal"/>
                </div>
            </div>

            <div className="journal-details-card-button-wrapper">
                <a className="button edit-button" href="#">Редактирай<i className="fas fa-pencil-alt"></i></a>
                <a className="button delete-button" href="#">Изтрий<i className="fas fa-times"></i></a>
            </div>

        </div>
    );
};

export default JournalDetailsCard;
