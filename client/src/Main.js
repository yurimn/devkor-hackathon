import React from "react";
import "./Main.css";
import imgfile from "./pic/korea1.png";

function Main(props) {
	return (
		<div className="main">
			<div className="main-content">
				<div className="main-text">
					<div className="main-sub-text">
						새내기를 위한 안암 가이드. 2022 ver
					</div>
					<div className="main-title-text">KOREA UNIVERSITY</div>
				</div>
				<img src={imgfile} className="main-img" />
			</div>
		</div>
	);
}

export default Main;
