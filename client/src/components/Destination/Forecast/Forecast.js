import './Forecast.css'

import * as destinationService from "../../../services/destinationService";

import {useEffect, useState} from 'react';
import Loading from "../../Shared/Loading/Loading";
import ForecastCard from "./ForecastCard/ForecastCard";

const Forecast = ({match}) => {

    let [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {

        destinationService.getWeatherInfo(match.params.lat, match.params.lon)
            .then(res => setWeatherInfo(res));

    }, []);

    // console.log(weatherInfo);


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

    if (weatherInfo.daily === undefined) {
        return  <Loading />;
    } else {

    return (
        <section className="custom-details-section forecast-section">
            <div className="forecast-wrapper">
                <h2 className="forecast-header">7-дневна прогноза за района</h2>
                <div className="forecast-container">
                    {weatherInfo.daily.map((x, index) => (index > 0) ? (
                        <ForecastCard key={x._id} {...x}
                            date={convertToDate(x.dt)}
                            day={convertToDay(x.dt)}
                            description={x.weather[0].description}
                            minTemp={Math.round(x.temp.min)}
                            maxTemp={Math.round(x.temp.max)}
                        />
                        ) : null
                    )}
                </div>
            </div>
        </section>

    );
    }

};

export default Forecast;
