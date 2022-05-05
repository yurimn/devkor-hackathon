import "./Page.css";

import Button from "./Button.js";
import Main from "./Main.js";
import MapContainer from "./MapContainer.js";
import React, { useState } from "react";
import QusImg from "./pic/question.png";

function Page(props) {
	const [click, setClick] = useState(0);
	const [title, setTitle] = useState("");
	const [loc_name, setLocName] = useState("");
	const [explain, setExplain] = useState("");
	const [loc, setLoc] = useState("");
	const [map, setMap] = useState(false);
	if (props.name == "intro") {
		return <Main name={props.name} />;
	}
	if (click === 0) {
		return (
			<div className="page">
				{props.title}
				<img src={QusImg} className="question-img" />
				<Button
					setClick={setClick}
					setMap={setMap}
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
				{props.title}
				<MapContainer
					loc_name={loc_name}
					loc={loc}
					explain={explain}
					map={map}
				/>
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
