import './Forecast.css'

import * as destinationService from "../../../../services/destinationService";

import {useEffect, useState} from 'react';

const Forecast = ({match}) => {

    let [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {

        destinationService.getWeatherInfo(match.params.lat, match.params.lon)
            .then(res => setWeatherInfo(res));

    }, []);

    console.log(weatherInfo.daily);

    function convertToDate(dateStamp) {
        const milliseconds = dateStamp * 1000
        const dateObject = new Date(milliseconds)
        return dateObject.toLocaleDateString('en-GB',)

    }

    function convertToDay(dateStamp) {
        const milliseconds = dateStamp * 1000
        const dateObject = new Date(milliseconds)

        let day = dateObject.toLocaleDateString('en-GB', {weekday: "long"});

        if (day === "Monday") {
            return "понеделник";
        } else if (day === "Tuesday") {
            return "вторник";
        } else if (day === "Wednesday") {
            return "сряда";
        } else if (day === "Thursday") {
            return "четвъртък";
        } else if (day === "Friday") {
            return "петък";
        } else if (day === "Saturday") {
            return "събота";
        } else if (day === "Sunday") {
            return "неделя";
        }
    }


    return (
        <section className="custom-details-section forecast-section">
            <div className="forecast-wrapper">
                <h2 className="forecast-header">7-дневна прогноза</h2>
                <div className="forecast-container">
                    {weatherInfo.daily.map((x, index) => (index > 0) ? (
                            <div className="forecast-card" key={x._id} {...x}>
                                <div className="date-wrapper">{convertToDate(x.dt)}</div>
                                <div className="day-wrapper">{convertToDay(x.dt)}</div>
                                <div className="description-wrapper">{x.weather[0].description}</div>
                                <div className="temperature-container">
                                    <span>{Math.round(x.temp.min)}&#176;</span>/<span>{Math.round(x.temp.max)}&#176;</span>
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </section>

    );
};

export default Forecast;
