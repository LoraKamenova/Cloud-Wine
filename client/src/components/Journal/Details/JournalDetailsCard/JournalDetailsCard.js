import './JournalDetailsCard.css'

const JournalDetailsCard = (props) => {
    return (
        <div className="journal-details-card">

            <div className="jdc-content-wrapper">
                <section className="jdc-first-section">
                    <h1 className="jdc-heading">{props.title}</h1>

                    <div className="jdc-subsection">
                        <h3 className="jdc-subheading">Къде ходихме</h3>
                        <div className="jdc-text jdc-place">{props.place}</div>
                    </div>

                    <div className="jdc-subsection">
                        <h3 className="jdc-subheading">Кога отидохме</h3>
                        <div className="jdc-text jdc-time">{props.time}</div>
                    </div>

                    <div className="jdc-subsection">
                        <h3 className="jdc-subheading">Какво правихме</h3>
                        <div className="jdc-text jdc-description">{props.description}</div>
                    </div>
                </section>

                <section className="jdc-second-section">
                    <h3 className="jdc-subheading image-and-tape-heading">Какво снимахме</h3>
                    <div className="jdc-image-and-tape-wrapper">
                        <div className="tape left-tape"></div>
                        <img className="jdc-image" src={props.imageUrl1} alt="journal"/>
                        <div className="tape right-tape"></div>
                        <img className="jdc-image" src={props.imageUrl2} alt="journal"/>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default JournalDetailsCard;
