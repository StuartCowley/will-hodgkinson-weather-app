import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__tempMin">
        Min Temp: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__tempMax">
        Max Temp: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__windSpeed">
        Wind Speed: {wind.speed}mph
      </div>
      <div className="forecast-details__windDirection">
        Wind Direction: {wind.direction}
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
