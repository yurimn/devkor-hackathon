import express, { json } from "express"; //express import
var router = express.Router();
import mealData from "../assets/meal_list.js";
import joyData from "../assets/joy_list.js"
import drinkData from "../assets/drink_list.js"
import fs from "fs"; //file 입출력을 위한 모듈 fs import

router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/api/get_random_loc", async (req, res) => {
	try {
		const id = req.query.id;
		if(id === 'meal'){

			var index = Math.floor(Math.random() * 45);
			// const idJsonFile = "./assets" + id + ".json"
	
			const json_data = mealData;
			console.log(json_data[index]);
			res.send({
				loc_name: json_data[index].name,
				explanation: json_data[index].explanation,
				location: json_data[index].location,
			});
		}else if(id === 'joy'){

			var index = Math.floor(Math.random() * 33);
			// const idJsonFile = "./assets" + id + ".json"
	
			const json_data = joyData;
			console.log(json_data[index]);
			res.send({
				loc_name: json_data[index].name,
				explanation: json_data[index].explanation,
				location: json_data[index].location,
			});
		} else{

			var index = Math.floor(Math.random() * 27);
			// const idJsonFile = "./assets" + id + ".json"
	
			const json_data = drinkData;
			console.log(json_data[index]);
			res.send({
				loc_name: json_data[index].name,
				explanation: json_data[index].explanation,
				location: json_data[index].location,
			});
		}
	} catch (err) {
		console.log(err);
		res.send({
			error: 'Can"t read api data',
		});
	}
});
export default router;
