import axios from "axios"; //server와 통신
import React, {useState} from 'react'

function Button(props) {
    const [click, setClick] = useState(0);
    const [name, setName] = useState('');
    const [explain, setExplain] = useState('');
    const [loc, setLoc] = useState('');
    var content;
    if(props.name === 'meal') {
        var s_content = "뭐먹지"
        var e_content = "다른거 뭐먹지"
    }
    else if(props.name === 'joy') {
        var s_content = "뭐하지"
        var e_content = "다른거 뭐하지"
    }
    if(click===0) content = s_content
    else content = e_content
	function getRandomLoc() {
		console.log("hi");
        setClick(1);
		axios
			.get("/api/get_random_loc", {
				method: "GET",
				params: {
					id: document.getElementById("random-button").prop,
				},
			})
			.then((response) => {
				console.log(Object.prototype.toString(response.data.explanation));
                setExplain(response.data.explanation)
                setName(response.data.name)
                setLoc(response.data.location)
			});
	}
	return (
		<button id="random-button" prop={props.name} onClick={getRandomLoc}>
            {content}
        </button>
	);
}
export default Button;
