import './CreateDestination.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";
import InputError from "../../Shared/InputError/InputError";

import * as destinationService from "../../../services/destinationService";

import {useHistory} from "react-router-dom"
import {useState} from "react";

const CreateDestination = () => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const onCreateDestinationSubmitHandler = (e) => {
        e.preventDefault();

        const {
            name,
            description,
            address,
            services,
            logoUrl,
            imageUrl1,
            imageUrl2,
            mapUrl
        } = e.target;

        destinationService.create(
            name.value,
            description.value,
            address.value,
            services.value,
            logoUrl.value,
            imageUrl1.value,
            imageUrl2.value,
            mapUrl.value)
            .then(() => {
                history.push('/destination/all')
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
        <section className="form-wrapper add-destination-form-wrapper">
            <FormHeader title="Нова дестинация"/>

            <form className="form-container" onSubmit={onCreateDestinationSubmitHandler}>

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
                        <label htmlFor="address">Адрес:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="address"
                           name="address"
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
                        <label htmlFor="services">Услуги:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="services"
                           name="services"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="logoUrl">URL лого:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="logoUrl"
                           name="logoUrl"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl1">URL снимка 1:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl1"
                           name="imageUrl1"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl2">URL снимка 2:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl2"
                           name="imageUrl2"
                           required/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="mapUrl">URL карта:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="mapUrl"
                           name="mapUrl"
                           required/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗПРАТИ"/>
                </div>

            </form>
        </section>
    );
};

export default CreateDestination;
