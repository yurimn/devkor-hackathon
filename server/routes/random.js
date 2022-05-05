import express, { json } from "express"; //express import
var router = express.Router();
import mealData from "../assets/meal_list.js";
import fs from "fs"; //file 입출력을 위한 모듈 fs import

router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/api/get_random_loc", async (req, res) => {
	try {
		const id = req.query.id;
		var index = Math.floor(Math.random() * 45 + 1);
		// const idJsonFile = "./assets" + id + ".json"

		const json_data = mealData;
		console.log(json_data[index]);
		res.send({
			loc_name: json_data[index].name,
			explanation: json_data[index].explanation,
			location: json_data[index].location,
		});
	} catch (err) {
		console.log(err);
		res.send({
			error: 'Can"t read api data',
		});
	}
});
export default router;
