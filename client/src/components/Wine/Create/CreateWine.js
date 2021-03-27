import './CreateWine.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";
import InputError from "../../Shared/InputError/InputError";

import * as wineService from "../../../services/wineService";

import {useHistory} from "react-router-dom"
import {useState} from "react";

const CreateWine = () => {
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
        <section className="form-wrapper add-wine-form-wrapper">
            <FormHeader title="Ново вино"/>
            <form className="form-container" onSubmit={onCreateWineSubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="name">Име:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="name"
                           name="name"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="category">Категория:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="category"
                           name="category"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="producer">Производител:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="producer"
                           name="producer"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="description">Описание:</label>
                    </div>
                    <textarea className="form-field-input textarea"
                              rows="11"
                              id="description"
                              name="description"
                              required
                              onBlur={onChangeDescriptionHandler}/>
                    <InputError>{errorMessage}</InputError>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl1">URL снимка:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl1"
                           name="imageUrl1"
                           required/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗПРАТИ"/>
                </div>

            </form>
        </section>
    );
};

export default CreateWine;
