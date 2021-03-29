import './WhiteDictionaryCard.css'
import {Link} from "react-router-dom";

const WhiteDictionaryCard = (props) => {
    return (
        <article className="white-dictionary-card">
            <div className="white-dictionary-card-content-wrapper">
                <div className="white-dictionary-image-wrapper">
                    <img className="white-dictionary-image" src={props.iconUrl} alt="icon"></img>
                </div>
                <h3 className="white-dictionary-card-title">{props.title}</h3>
                <div className="white-dictionary-text-wrapper">
                    <p className="white-dictionary-card-text">{props.shortText}</p>
                </div>
                <Link className="white-dictionary-card-button" to={props.link}>Прочети</Link>
            </div>
        </article>
    );
};

export default WhiteDictionaryCard;
