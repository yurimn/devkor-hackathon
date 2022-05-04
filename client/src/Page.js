import "./Page.css";
import axios from 'axios'; //server와 통신

function get_random_loc(id){
	console.log("hi");
	axios.get("/api/get_random_loc", {
		method: 'GET',
		params:{
			id: id
		}
	})
	.then((response) => {
		console.log("success")
	})
}

function Button({idd}) {
	return (
		<button
			id="random-button"
			onClick={get_random_loc(idd)}
		>
			idd
		</button>
	);
}

function Page({ content }) {
	return (
		<div className="page">
			content
			<Button />
		</div>
	);
}

export default Page;
