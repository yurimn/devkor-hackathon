import "./Page.css";
<<<<<<< HEAD

import Button from './Button.js'
=======
import axios from "axios"; //server와 통신

function Button({ idd }) {
	function getRandomLoc() {
		console.log("hi");
		axios
			.get("/api/get_random_loc", {
				method: "GET",
				params: {
					id: document.getElementById("random-button").prop,
				},
			})
			.then((response) => {
				console.log("success");
				response.data.name;
			});
	}
	return (
		<button id="random-button" prop="meal" onClick={getRandomLoc}>
			idd
		</button>
	);
}
>>>>>>> aa00a9d804984c8c3e892f685e84186010d00dcc

function Page({ content }) {
	return (
		<div className="page">
			content
			<Button />
		</div>
	);
}

export default Page;
