import express from "express"; //express를 설치했기 때문에 가져올 수 있다.
import cors from "cors";
const app = express();

const port = process.env.PORT || 3001;

import bodyParser from "body-parser";
import randomRouter from "./routes/random.js"; //랜덤한 데이터를 가져오는 라우팅

app.use(bodyParser.json());
app.use("/", randomRouter);
app.use(
	cors({
		origin: ["http://localhost:5000"],
		credentials: true,
	})
);
app.use("/uploads", express.static("uploads"));
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.listen(5000, () => {
	console.log(`express is running on 5000`);
});
