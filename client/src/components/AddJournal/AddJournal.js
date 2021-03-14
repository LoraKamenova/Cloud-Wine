import './AddJournal.css'

const AddJournal = () => {
    return (
        <main className="form-pages add-journal-page">

            <section className="general-form-wrapper add-journal-form-wrapper">

                <div className="general-form-site-name-wrapper">
                    <div className="general-form-site-name-text">
                        <h1 className="general-form-site-name">Винoписи</h1>
                    </div>
                    <div className="general-form-site-name-pic">
                        <img className="general-form-pic"
                             src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615712293/React%20Project/grape_border_ogd8gq.png"/>
                    </div>
                </div>

                <form className="general-form" action="" method="">
                    <div className="general-form-heading-wrapper">
                        <h1 className="general-form-heading">НОВ ВИНОПИС</h1>
                    </div>

                    <section className="general-form-main-section">

                        <section className="general-form-sub-section">
                            <div className="general-form-field-wrapper">
                                <div className="general-form-field-heading">
                                    <label htmlFor="title">Заглавие:</label>
                                </div>
                                <input className="general-form-field-input" type="text" id="title" name="title"/>
                            </div>

                            <div className="general-form-field-wrapper">
                                <div className="general-form-field-heading">
                                    <label htmlFor="url1">URL към снимка 1:</label>
                                </div>
                                <input className="general-form-field-input" type="text" id="url1" name="url1"/>
                            </div>

                            <div className="general-form-field-wrapper">
                                <div className="general-form-field-heading">
                                    <label htmlFor="url2">URL към снимка 2:</label>
                                </div>
                                <input className="general-form-field-input" type="text" id="url2" name="url2"/>
                            </div>
                        </section>

                        <section className="general-form-sub-section">
                            <div className="general-form-field-wrapper">
                                <div className="general-form-field-heading">
                                    <label htmlFor="text">Текст:</label>
                                </div>
                                <textarea className="general-form-field-input" rows="10" id="text" name="text"/>
                            </div>
                        </section>

                    </section>

                    <div className="general-form-button-wrapper">
                        <button className="general-form-button" type="submit">ИЗПРАТИ</button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default AddJournal;
