import './JournalDetailsCard.css'

const JournalDetailsCard = (props) => {
    return (
        <div className="journal-details-card">

            <section className="jdc-first-section">
                    <h1 className="jdc-heading">{props.title}</h1>

                <div className="jdc-subsection">
                    <h3 className="jdc-subheading">Къде ходихме</h3>
                    <div className="jdc-text">{props.place}</div>
                </div>

                <div className="jdc-subsection">
                    <h3 className="jdc-subheading">Кога отидохме</h3>
                    <div className="jdc-text">{props.time}</div>
                </div>

                <div className="jdc-subsection">
                    <h3 className="jdc-subheading">Какво правихме</h3>
                    <div className="jdc-text">{props.description}</div>
                </div>
            </section>

            <section className="jdc-second-section">
                <h3 className="jdc-subheading image-and-tape-heading">Какво снимахме</h3>
                <div className="jdc-image-and-tape-wrapper">
                    <div className="tape"></div>
                    <img className="jdc-image" src={props.imageUrl1} alt="journal"/>
                    <div className="tape"></div>
                    <img className="jdc-image" src={props.imageUrl2} alt="journal"/>
                </div>
            </section>

            <div className="jdc-button-wrapper">
                <a className="button edit-button" href="#">Редактирай<i className="fas fa-pencil-alt"></i></a>
                <a className="button delete-button" href="#">Изтрий<i className="fas fa-times"></i></a>
            </div>

        </div>
    );
};

export default JournalDetailsCard;
