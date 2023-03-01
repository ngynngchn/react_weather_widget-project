// library import
import { useState, useEffect } from "react";

// style import
import "./Widget.css";

const Widget = ({ apikey, location }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apikey}`
			// `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}` hourly
		)
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					setData(data);
					console.log("weather", data);
				}
			});
	}, [location, apikey]);

	function getDate(unix) {
		const date = new Date(unix * 1000);
		const options = { weekday: "long", day: "numeric", month: "short" };
		return date.toLocaleDateString("en-US", options);
	}

	return (
		<div className="Widget">
			{data && (
				<section>
					<article>
						<h3>{getDate(data.dt)}</h3>
						<p>{data.name}</p>
						<h2>{Math.floor(data.main.temp)}°</h2>
						<h5>{data.weather[0].description}</h5>
					</article>

					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt={data.weather[0].description}
						width="100%"
					/>
				</section>
			)}
		</div>
	);
};

export default Widget;
