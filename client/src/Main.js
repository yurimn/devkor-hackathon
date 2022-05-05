import React from "react";
import "./Main.css";
function Main(props) {
	return (
		<div className="main">
			<div className="main-text">
				<div className="main-sub-text">
					새내기를 위한 안암 가이드. 2022 ver
				</div>
				<div className="main-title-text">KOREA UNIVERSITY</div>
			</div>
			<div>
				<img src={require("./pic/korea2.png").default} />
			</div>
		</div>
	);
}

export default Main;
