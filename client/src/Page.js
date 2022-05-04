import "./Page.css";

import Button from "./Button.js";

function Page(props) {
	if (props.name == "intro") {
		return <div>{props.name}</div>;
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
