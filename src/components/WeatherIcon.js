import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPooStorm, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faCloud, faSmog} from '@fortawesome/free-solid-svg-icons'

const WheaterIcon = (props) => {

    const weatherIcon = props.report.weather.map((weather, index) => {
        switch(weather.main) {
            case 'Thunderstorm':
                return <FontAwesomeIcon key={index} icon={faPooStorm} />
            case 'Drizzle':
                return <FontAwesomeIcon key={index} icon={faCloudRain} />
            case 'Rain':
                return <FontAwesomeIcon key={index} icon={faCloudShowersHeavy} />
            case 'Snow':
                return <FontAwesomeIcon key={index} icon={faSnowflake} />
            case 'Clear':
                return <FontAwesomeIcon key={index} icon={faSun} />
            case 'Clouds':
                return <FontAwesomeIcon key={index} icon={faCloud} />
            default:
                return <FontAwesomeIcon key={index} icon={faSmog} />
        }
    })

    console.log(weatherIcon)
    return (
        <div>
            {weatherIcon}
        </div>
    )
}

export default WheaterIcon
