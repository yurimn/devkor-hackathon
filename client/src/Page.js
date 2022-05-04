import "./Page.css";

import Button from "./Button.js";
import Main from "./Main.js";

function Page(props) {
	if (props.name == "intro") {
		return <Main name={props.name} />;
	} else {
		return (
			<div className="page">
				{props.name}
				<Button name={props.name} />
			</div>
		);
	}
}

export default Page;
