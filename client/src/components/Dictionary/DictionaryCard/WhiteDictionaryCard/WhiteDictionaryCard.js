import './WhiteDictionaryCard.css'
import {Link} from "react-router-dom";

const WhiteDictionaryCard = (props) => {
    return (
        <article className="white-dictionary-card">
            <div className="white-dictionary-card-content-wrapper">
                <div className="white-dictionary-image-wrapper">
                    <img className="white-dictionary-image" src={props.url} alt="icon"></img>
                </div>
                <h3 className="white-dictionary-card-title">{props.title}</h3>
                <p className="white-dictionary-card-text">{props.text}</p>
            </div>
            <Link className="white-dictionary-card-button" to={props.link}>Прочети</Link>
        </article>
    );
};

export default WhiteDictionaryCard;
