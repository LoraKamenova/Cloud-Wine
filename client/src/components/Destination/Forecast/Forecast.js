import './Forecast.css'

import * as destinationService from "../../../services/destinationService";

import {useEffect, useState} from 'react';
import Loading from "../../Shared/Loading/Loading";
import ForecastCard from "./ForecastCard/ForecastCard";

const Forecast = ({match}) => {

    let [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {

        destinationService.getWeatherInfo(match.params.latitude, match.params.longitude)
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

    function convertToIcon(description) {

        if (description === "слаб дъжд") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617215294/React%20Project/slab_dujd_isayi5.png";
        } else if (description === "умерен дъжд") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617215294/React%20Project/umeren_dujd_tseb7s.png";
        } else if (description === "дъжд и сняг") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617217840/React%20Project/dujd_i_sniag_taukcy.png";
        } else if (description === "слаб снеговалеж") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617217841/React%20Project/slab_snegovalej_jp9ivj.png";
        } else if (description === "облачно") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617215294/React%20Project/oblachno_ezgzqe.png";
        } else if (description === "разкъсана облачност") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617215294/React%20Project/razkusana_oblachnost_gi5phd.png";
        } else if (description === "предимно облачно") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617215294/React%20Project/predimno_oblachno_t3vabd.png";
        } else if (description === "ясно небе") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617215294/React%20Project/yasno_nebe_k9x8yn.png";
        } else if (description === "предимно ясно") {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617215294/React%20Project/predimno_yasno_rdxoft.png";
        } else {
            return "https://res.cloudinary.com/dyhmxus4n/image/upload/v1617216202/React%20Project/question_1_wk2ulm.png"
        }
    }

    if (weatherInfo.daily === undefined) {
        return <Loading/>;
    } else {

        return (
            <div className="forecast-wrapper">
                <h2 className="forecast-header">Прогноза за времето</h2>
                <div className="forecast-container">
                    {weatherInfo.daily.map((x, index) => (index > 0) ? (
                            <ForecastCard key={x._id} {...x}
                                          date={convertToDate(x.dt)}
                                          day={convertToDay(x.dt)}
                                          iconUrl={convertToIcon(x.weather[0].description)}
                                          description={x.weather[0].description}
                                          minTemp={Math.round(x.temp.min)}
                                          maxTemp={Math.round(x.temp.max)}
                            />
                        ) : null
                    )}
                </div>
            </div>
        );
    }
};

export default Forecast;
