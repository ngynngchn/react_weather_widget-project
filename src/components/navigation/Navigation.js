import "./Navigation.css";
const Navigation = (props) => {
	return (
		<nav>
			<input
				type="search"
				name="search"
				id="search"
				onInput={props.handleClick}
			/>
		</nav>
	);
};

export default Navigation;
