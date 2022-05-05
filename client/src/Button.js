import axios from "axios"; //server와 통신
import React, { useState } from "react";

function Button(props) {
	var content;
	if (props.name === "meal") {
		var s_content = "뭐먹지";
		var e_content = "다른거 뭐먹지";
	} else if (props.name === "joy") {
		var s_content = "뭐하지";
		var e_content = "다른거 뭐하지";
	} else{
		var s_content = "뭐마시지"
		var e_content = "다른거 뭐마시지"
	}
	if (props.click === 0) content = s_content;
	else content = e_content;
	function getRandomLoc() {
		props.setClick(1);
		axios
			.get("/api/get_random_loc", {
				method: "GET",
				params: {
					id: props.name,
				},
			})
			.then((response) => {
				props.setExplain(response.data.explanation);
				props.setLocName(response.data.loc_name);
				props.setLoc(response.data.location);
			});
	}
	return (
		<button id="random-button" prop={props.name} onClick={getRandomLoc}>
			{content}
		</button>
	);
}

export default Button;
