import React from 'react'

const WeatherError = (props) => {
    return (
        <div className="alert alert-warning" role="alert">
            {props.errorMessage}
        </div>
    )
}

export default WeatherError
