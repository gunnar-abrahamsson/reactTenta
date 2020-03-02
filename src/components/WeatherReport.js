import React from 'react';
import WeatherResponse from './WeatherDescript';

const WeatherReport = props => {
	const { name } = props.report;
    const { temp, humidity } = props.report.main;
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">
						The temperature in {name} is {temp}&deg; C right now, with a humidity of {humidity}%.
					</h5>
					<h6 className="mb-0">Current weather is:</h6>
					<WeatherResponse report={props.report} />
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
