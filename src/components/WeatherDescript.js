import React from 'react'

const WeatherResponse = (props) => {
    const description  = props.report.weather.map((weather, index) => {
        return <li key={index}>{weather.description}</li>;
    })
    return (
        <ul className="list-unstyled mb-0">
            {description}
        </ul>
    )
}

export default WeatherResponse
