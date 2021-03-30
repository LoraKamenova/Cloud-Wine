import './EditDestination.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";
import InputError from "../../Shared/InputError/InputError";

import * as destinationService from "../../../services/destinationService";

import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"

const EditDestination = ({match}) => {
    const history = useHistory();
    const destinationId = match.params.destinationId;

    const [destination, setDestination] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        destinationService.getOne(destinationId)
            .then(res => setDestination(res));
    }, [])

    const onEditDestinationSubmitHandler = (e) => {
        e.preventDefault();

        let updatedDestination = {
            ...destination,
            name: e.target.name.value,
            description: e.target.description.value,
            address: e.target.address.value,
            lat: e.target.lat.value,
            lon: e.target.lon.value,
            services: e.target.services.value,
            logoUrl: e.target.logoUrl.value,
            imageUrl1: e.target.imageUrl1.value,
            imageUrl2: e.target.imageUrl2.value,
            mapUrl: e.target.mapUrl.value,
        };

        destinationService.update(destinationId, updatedDestination)
            .then(() => {
                history.push(`/destination/details/${destinationId}`);
                return null;
            });
    }

    const onChangeDescriptionHandler = (e) => {
        if (e.target.value.length < 100) {
            setErrorMessage('Описанието трябва да е минимум 100 символа');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <section className="form-wrapper edit-destination-form-wrapper">
            <FormHeader title="Редактирай дестинация"/>

            <form className="form-container" onSubmit={onEditDestinationSubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="name">Име:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="name"
                           name="name"
                           required
                           defaultValue={destination.name}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="address">Адрес:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="address"
                           name="address"
                           defaultValue={destination.address}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="lat">Географска ширина:</label>
                    </div>
                    <input className="form-field-input"
                           type="number"
                           step="0.0001"
                           id="lat"
                           name="lat"
                           required
                           defaultValue={destination.lat}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="lon">Географска дължина:</label>
                    </div>
                    <input className="form-field-input"
                           type="number"
                           step="0.0001"
                           id="lon"
                           name="lon"
                           required
                           defaultValue={destination.lon}/>
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
                              onBlur={onChangeDescriptionHandler}
                              defaultValue={destination.description}/>
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
                           defaultValue={destination.services}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="logoUrl">URL лого:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="logoUrl"
                           name="logoUrl"
                           defaultValue={destination.logoUrl}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl1">URL снимка 1:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl1"
                           name="imageUrl1"
                           defaultValue={destination.imageUrl1}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl2">URL снимка 2:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="imageUrl2"
                           name="imageUrl2"
                           defaultValue={destination.imageUrl2}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="mapUrl">URL карта:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="mapUrl"
                           name="mapUrl"
                           defaultValue={destination.mapUrl}/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗПРАТИ"/>
                </div>

            </form>
        </section>
    );
};

export default EditDestination;
