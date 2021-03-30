import './ForecastCard.css'

const ForecastCard = (props) => {
    return (
        <div className="forecast-card">
            <div className="date-wrapper">{props.date}</div>
            <div className="day-wrapper">{props.day}</div>
            <div className="description-wrapper">{props.description}</div>
            <div className="temperature-container">
                <span>{props.minTemp}&#176;</span>/<span>{props.maxTemp}&#176;</span>
            </div>
        </div>
    );
};

export default ForecastCard;
