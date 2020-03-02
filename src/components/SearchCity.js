import React from 'react';

const SearchCity = (props) => {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={props.handleSubmit}>
					<div className="input-group">
						<input 
							type="text" 
							className="form-control form-control-lg" 
							id="city" 
							onChange={props.handleChange}
							value={props.city}
						/>

						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>
			</div>
		)
}

export default SearchCity;
