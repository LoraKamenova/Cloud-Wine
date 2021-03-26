import './DeleteWine.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import * as wineService from "../../../services/wineService";

import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"

const DeleteWine = ( { match } ) => {
    const history = useHistory();
    let wineId = match.params.wineId;

    const [wine, setWine] = useState({});

    useEffect(() => {
        wineService.getOne(wineId)
            .then(res => setWine(res));
    }, [])

    const onDeleteWineSubmitHandler = (e) => {
        e.preventDefault();

        wineService.deleteWine(wineId)
            .then(() => {
                history.push('/wine/all');
                return null;
            });
    }

    return (
        <section className="general-form-wrapper delete-wine-form-wrapper">
            <FormHeader title="Изтрий вино"/>

            <form className="general-form" onSubmit={onDeleteWineSubmitHandler}>
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
                               defaultValue={wine.name}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="category">Категория:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="category"
                               name="category"
                               readOnly
                               defaultValue={wine.category}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="producer">Производител:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="producer"
                               name="producer"
                               readOnly
                               defaultValue={wine.producer}/>
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
                                  defaultValue={wine.description}/>
                    </div>

                    <div className="general-form-field-wrapper">
                        <div className="general-form-field-heading">
                            <label htmlFor="imageUrl1">URL снимка:</label>
                        </div>
                        <input className="general-form-field-input delete-input"
                               type="text"
                               id="imageUrl1"
                               name="imageUrl1"
                               readOnly
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

export default DeleteWine;
