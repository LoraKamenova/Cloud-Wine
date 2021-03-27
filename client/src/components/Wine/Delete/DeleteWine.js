import './DeleteWine.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";

import * as wineService from "../../../services/wineService";

import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"

const DeleteWine = ({match}) => {
    const history = useHistory();
    const wineId = match.params.wineId;

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
        <section className="form-wrapper delete-wine-form-wrapper">
            <FormHeader title="Изтрий вино"/>
            <form className="form-container" onSubmit={onDeleteWineSubmitHandler}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="name">Име:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="name"
                           name="name"
                           readOnly
                           defaultValue={wine.name}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="category">Категория:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="category"
                           name="category"
                           readOnly
                           defaultValue={wine.category}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="producer">Производител:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="producer"
                           name="producer"
                           readOnly
                           defaultValue={wine.producer}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="description">Описание:</label>
                    </div>
                    <textarea className="form-field-input textarea form-field-input-delete"
                              rows="11"
                              id="description"
                              name="description"
                              readOnly
                              defaultValue={wine.description}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="imageUrl1">URL снимка:</label>
                    </div>
                    <input className="form-field-input form-field-input-delete"
                           type="text"
                           id="imageUrl1"
                           name="imageUrl1"
                           readOnly
                           defaultValue={wine.imageUrl1}/>
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗТРИЙ"/>
                </div>

            </form>
        </section>
    );
};

export default DeleteWine;
