import React from 'react';
import Axios from 'axios';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import WeatherError from './components/WeatherError'
import WeatherIcon from './components/WeatherIcon'

class App extends React.Component {
	state = {
		city: '',
		errorMessage: false,
		report: null,
	}

	handleSubmit = (e) => {
		e.preventDefault();

		//Get weather
		this.getWeather(this.state.city)

		this.setState({
			city: ''
		})
	}

	getWeather = (searchCity) => {
		const apiKey = '33db1e7c6ddb018e2d6156112f847724';
		Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${apiKey}`)
		.then(resp => {
			this.setState({
				report: resp.data,
				errorMessage: false
			})
		})
		.catch(() => {
			this.setState({
				errorMessage: `Oh, sorry, something went wrong. You sure the place "${searchCity}" exists?`,
				report: null
			})
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">
						{this.state.report ? 
							<WeatherIcon report={this.state.report} /> 
							: '🌦❔'
						}
						</span>
					</h1>

					<SearchCity handleSubmit={this.handleSubmit} city={this.state.city} handleChange={this.handleChange}  />

					{
						this.state.report
						? (
							<WeatherReport report={this.state.report} />
						)
						: ''
					}

					{
						this.state.errorMessage
						? (
							<WeatherError errorMessage={this.state.errorMessage} />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
