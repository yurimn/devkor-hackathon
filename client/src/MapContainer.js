import axios from "axios"; //server와 통신
import React, { useState } from "react";
import "./MapContainer.css";

function MapContainer(props) {
	return (
		<div className="container">
			<div className="container-explain">
				<div className="container-title">{props.loc_name}</div>
				<div className="container-text">{props.explain}</div>
				<div className="container-text">{props.loc}</div>
			</div>
			<div className="container-map" />
		</div>
	);
}
export default MapContainer;
