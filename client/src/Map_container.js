import axios from "axios"; //server와 통신
import React, {useState} from 'react'

function Map_container(props) {
    
    if(props.click===0) content = s_content
    else content = e_content
	function getMapData() {
        
        props.setClick(1);
		axios
			.get("/api/get_random_loc", {
				method: "GET",
				params: {
					id: document.getElementById("random-button").prop,
				},
			})
			.then((response) => {
                props.setExplain(response.data.explanation)
                props.setLocName(response.data.name)
                props.setLoc(response.data.location)
			});
	}
	return (
		<button id="random-button" prop={props.name} onClick={getRandomLoc}>
            {content}
        </button>
	);
}
export default Map_container;
