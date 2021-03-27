import './DeleteDestination.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import * as destinationService from "../../../services/destinationService";

import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"

const DeleteDestination = ( { match } ) => {
    const history = useHistory();
    let destinationId = match.params.destinationId;

    const [destination, setDestination] = useState({});

    useEffect(() => {
        destinationService.getOne(destinationId)
            .then(res => setDestination(res));
    }, [])

    const onDeleteDestinationSubmitHandler = (e) => {
        e.preventDefault();


        destinationService.deleteDestination(destinationId)
            .then(() => {
                history.push('/destination/all');
                return null;
            });
    }

    return (
        <section className="general-form-wrapper delete-destination-form-wrapper">
            <FormHeader title="Изтрий дестинация"/>

            <form className="general-form" onSubmit={onDeleteDestinationSubmitHandler}>
                <section className="general-form-main-section">

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="name">Име:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="name"
                               name="name"
                               readOnly
                               defaultValue={destination.name}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="description">Описание:</label>
                        </div>
                        <textarea className="general-form-field-input delete-input"
                                  rows="11"
                                  id="description"
                                  name="description"
                                  readOnly
                                  defaultValue={destination.description}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="address">Адрес:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="address"
                               name="address"
                               readOnly
                               defaultValue={destination.address}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="services">Услуги:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="services"
                               name="services"
                               readOnly
                               defaultValue={destination.services}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="logoUrl">URL лого:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="logoUrl"
                               name="logoUrl"
                               readOnly
                               defaultValue={destination.logoUrl}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl1">URL снимка 1:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="imageUrl1"
                               name="imageUrl1"
                               readOnly
                               defaultValue={destination.imageUrl1}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl2">URL снимка 2:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="imageUrl2"
                               name="imageUrl2"
                               readOnly
                               defaultValue={destination.imageUrl2}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="mapUrl">URL карта:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="mapUrl"
                               name="mapUrl"
                               readOnly
                               defaultValue={destination.mapUrl}/>
                    </div>
                </section>

                <div className="general-form-button-wrapper">
                    <input className="general-form-button" type="submit" value="ИЗТРИЙ"/>
                </div>
            </form>
        </section>
    );
};

export default DeleteDestination;
