import "./App.css";
// component import
import Widget from "./components/widget/Widget";
import Navigation from "./components/navigation/Navigation";
import { useEffect, useState } from "react";

// library import

function App() {
	const [city, setCity] = useState("London");
	const [geodata, setGeoData] = useState({ lat: "51.51", lon: "-0.13" });
	let apiKey = "cb4655aa96517b4f6a0e438cbf95ebfc";

	function handleClick(e) {
		setCity(e.target.value);
	}

	useEffect(() => {
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log("data", data);
				setGeoData({
					lat: data[0].lat,
					lon: data[0].lon,
				});
			});
	}, [apiKey, city]);

	console.log(geodata, "geodata");

	return (
		<div className="App">
			<Navigation handleClick={handleClick} />
			<Widget apikey={apiKey} location={geodata} />
		</div>
	);
}

export default App;
