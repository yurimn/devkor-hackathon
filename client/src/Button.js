
import axios from 'axios'; //server와 통신  

function Button({idd}) {
	function getRandomLoc(){
		console.log("hi");
		axios.get("/api/get_random_loc", {
			method: 'GET',
			params:{
				id: document.getElementById('random-button').prop
			}
		})
		.then((response) => {
			console.log("success")
			response.data.name 
		})
	}
	return (
		<button
			id="random-button"
			prop = "meal"
			onClick={getRandomLoc}
		>
			
		</button>
	);	
}
export default Button;