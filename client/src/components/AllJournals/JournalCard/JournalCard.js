import './JournalCard.css'

const JournalCard = (props) => {
    return (
        <article className="journal-card">
            <div className="journal-card-image-wrapper">
                <img className="journal-card-image"
                     src={props.imageUrl1} alt="journal"/>
            </div>
            <div className="journal-card-title-wrapper">
                <h3 className="journal-card-title">{props.title}</h3>
            </div>
        </article>
    );
};

export default JournalCard;
