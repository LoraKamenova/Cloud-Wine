import './EditWine.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import InputError from "../../Other/InputError/InputError";
import * as wineService from "../../../services/wineService";

import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"

const EditWine = ({match}) => {
    const history = useHistory();
    let wineId = match.params.wineId;

    const [wine, setWine] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        wineService.getOne(wineId)
            .then(res =>setWine(res));
    }, [])

    const onEditWineSubmitHandler = (e) => {
        e.preventDefault();

        let updatedWine = {
            ...wine,
            name: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            producer: e.target.producer.value,
            imageUrl1: e.target.imageUrl1.value,
        };

        wineService.update(wineId, updatedWine)
            .then(() => {
                history.push(`/wine/details/${wineId}`);
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
        <section className="general-form-wrapper edit-wine-form-wrapper">
            <FormHeader title="Редактирай вино"/>

            <form className="general-form" onSubmit={onEditWineSubmitHandler}>
                <section className="general-form-main-section">

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="name">Име:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="name"
                               name="name"
                               required
                               defaultValue={wine.name}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="category">Категория:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="category"
                               name="category"
                               defaultValue={wine.category}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="producer">Производител:</label>
                        </div>
                        <input className="general-form-field-input"
                               type="text"
                               id="producer"
                               name="producer"
                               defaultValue={wine.producer}/>
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
                                  onBlur={onChangeDescriptionHandler}
                                  defaultValue={wine.description}/>
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
                               defaultValue={wine.imageUrl1}/>
                    </div>

                </section>

                <div className="general-form-button-wrapper">
                    <input className="general-form-button" type="submit" value="ИЗПРАТИ"/>
                </div>
            </form>
        </section>
    );
};

export default EditWine;
