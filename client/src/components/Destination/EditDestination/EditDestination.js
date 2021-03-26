import './EditDestination.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import InputError from "../../Other/InputError/InputError";
import * as destinationService from "../../../services/destinationService";

import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"

const EditDestination = ( { match } ) => {
    const history = useHistory();

    const [destination, setDestination] = useState({});
    const [errorMessage, setErrorMessage]= useState('');

    useEffect(() => {
        destinationService.getOne(match.params.destinationId)
            .then(res => setDestination(res));
    }, [])

    const onEditDestinationSubmitHandler = (e) => {
        e.preventDefault();

        let destinationId = match.params.destinationId;
        let updatedDestination = {...destination,
            name: e.target.name.value,
            description: e.target.description.value,
            address: e.target.address.value,
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

    const onDescriptionChangeHandler = (e) => {
        if(e.target.value.length < 10) {
            setErrorMessage('Description too short');
        } else {
            setErrorMessage('');
        }
    };

    return (

        <section className="general-form-wrapper edit-destination-form-wrapper">
            <FormHeader title="Редактирай дестинация"/>

            <form className="general-form" onSubmit={onEditDestinationSubmitHandler}>
                <section className="general-form-main-section">

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="name">Име:</label>
                        </div>
                        <input className="general-form-field-input" type="text" id="name" name="name" defaultValue={destination.name}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="description">Текст:</label>
                        </div>
                        <textarea className="general-form-field-input" rows="11" id="description" name="description"
                                  onBlur={onDescriptionChangeHandler} defaultValue={destination.description}/>
                                  <InputError>{errorMessage}</InputError>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="address">Адрес:</label>
                        </div>
                        <input className="general-form-field-input" type="text" id="address" name="address" defaultValue={destination.address}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="services">Услуги:</label>
                        </div>
                        <input className="general-form-field-input" type="text" id="services" name="services" defaultValue={destination.services}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="logoUrl">URL към лого:</label>
                        </div>
                        <input className="general-form-field-input" type="text" id="logoUrl" name="logoUrl" defaultValue={destination.logoUrl}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl1">URL към снимка 1:</label>
                        </div>
                        <input className="general-form-field-input" type="text" id="imageUrl1" name="imageUrl1" defaultValue={destination.imageUrl1}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl2">URL към снимка 2:</label>
                        </div>
                        <input className="general-form-field-input" type="text" id="imageUrl2" name="imageUrl2" defaultValue={destination.imageUrl2}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="mapUrl">URL към карта:</label>
                        </div>
                        <input className="general-form-field-input" type="text" id="mapUrl" name="mapUrl" defaultValue={destination.mapUrl}/>
                    </div>

                </section>

                <div className="general-form-button-wrapper">
                    <input className="general-form-button" type="submit" value="ИЗПРАТИ"/>
                </div>
            </form>
        </section>
    );
};

export default EditDestination;
