import './AddJournal.css'
import FormHeader from "../FormHeader/FormHeader";

const AddJournal = () => {
    return (
        <section className="general-form-wrapper add-journal-form-wrapper">

            <FormHeader title="Нов винепис"/>

            <form className="general-form" action="" method="">

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
                            <textarea className="general-form-field-input" rows="11" id="text" name="text"/>
                        </div>
                    </section>

                </section>

                <div className="general-form-button-wrapper">
                    <button className="general-form-button" type="submit">ИЗПРАТИ</button>
                </div>
            </form>
        </section>
    );
};

export default AddJournal;
