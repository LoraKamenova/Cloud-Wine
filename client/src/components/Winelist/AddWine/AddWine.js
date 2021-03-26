import './AddWine.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import * as wineService from "../../../services/wineService";
import InputError from "../../Other/InputError/InputError";

import {useHistory} from "react-router-dom"
import {useState} from "react";

const AddWine = () => {
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('');

    const onCreateWineSubmitHandler = (e) => {
        e.preventDefault();

        const {
            name,
            category,
            description,
            producer,
            imageUrl1,
        } = e.target;

        wineService.create(
            name.value,
            category.value,
            description.value,
            producer.value,
            imageUrl1.value)
            .then(() => {
                history.push('/wine/all')
            })
    };

    const onChangeDescriptionHandler = (e) => {
        if (e.target.value.length < 100) {
            setErrorMessage('Описанието трябва да е минимум 100 символа');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <section className="general-form-wrapper add-wine-form-wrapper">
            <FormHeader title="Ново вино"/>

            <form className="general-form" onSubmit={onCreateWineSubmitHandler}>
                <section className="general-form-main-section">

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="name">Име:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="name"
                               name="name"
                               required/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="category">Категория:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="category"
                               name="category"
                               required/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="producer">Производител:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="producer"
                               name="producer"
                               required/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="description">Описание:</label>
                        </div>
                        <textarea className="general-form-field-input"
                                  rows="11"
                                  id="description"
                                  name="description"
                                  required
                                  onBlur={onChangeDescriptionHandler}/>
                        <InputError>{errorMessage}</InputError>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl1">URL снимка:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="imageUrl1"
                               name="imageUrl1"
                               required/>
                    </div>
                </section>

                <div className="general-form-button-wrapper">
                    <input className="general-form-button" type="submit" value="ИЗПРАТИ"/>
                </div>
            </form>
        </section>
    );
};

export default AddWine;
