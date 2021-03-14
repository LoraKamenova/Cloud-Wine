import './JournalDetailsCard.css'

const JournalDetailsCard = (props) => {
    return (
        <div className="journal-details-card">

            <header className="journal-details-card-header">
                <h1 className="journal-details-card-heading">{props.title}</h1>
            </header>

            <div className="journal-details-card-image-wrapper">
                <img className="journal-details-card-image" src={props.url1}/>
                <img className="journal-details-card-image" src={props.url2}/>
            </div>

            <div className="journal-details-card-text">{props.paragraph}</div>

            <div className="journal-details-card-button-wrapper">
                <a className="button edit-button" href="#">Редактирай<i className="fas fa-pencil-alt"></i></a>
                <a className="button delete-button" href="#">Изтрий<i className="fas fa-times"></i></a>
            </div>

        </div>
    );
};

export default JournalDetailsCard;
