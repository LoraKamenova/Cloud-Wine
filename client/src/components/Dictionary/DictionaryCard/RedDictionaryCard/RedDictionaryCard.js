import './RedDictionaryCard.css'
import {Link} from "react-router-dom";

const RedDictionaryCard = (props) => {
    return (
        <article className="red-dictionary-card">
            <div className="red-dictionary-card-content-wrapper">
                <div className="red-dictionary-image-wrapper">
                    <img className="red-dictionary-image" src={props.url}></img>
                </div>
                <h3 className="red-dictionary-card-title">{props.title}</h3>
                <p className="red-dictionary-card-text">{props.text}</p>
            </div>
            <Link className="red-dictionary-card-button" to={props.link}>Прочети</Link>
        </article>
    );
};

export default RedDictionaryCard;
