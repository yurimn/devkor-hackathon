import "./Page.css";

import Button from "./Button.js";
import Main from "./Main.js";
import MapContainer from "./MapContainer.js";
import React, { useState } from "react";

function Page(props) {
	const [click, setClick] = useState(0);
	const [loc_name, setLocName] = useState("");
	const [explain, setExplain] = useState("");
	const [loc, setLoc] = useState("");

	if (props.name == "intro") {
		return <Main name={props.name} />;
	}
	if (click === 0) {
		return (
			<div className="page">
				{props.name}
				<Button
					setClick={setClick}
					click={click}
					setExplain={setExplain}
					setLoc={setLoc}
					setLocName={setLocName}
					name={props.name}
				/>
			</div>
		);
	} else {
		return (
			<div className="page">
				{props.name}
				<MapContainer
					loc_name={loc_name}
					loc={loc}
					explain={explain}
				></MapContainer>
				<Button
					setClick={setClick}
					click={click}
					setExplain={setExplain}
					setLoc={setLoc}
					setLocName={setLocName}
					name={props.name}
				/>
			</div>
		);
	}
}

export default Page;
