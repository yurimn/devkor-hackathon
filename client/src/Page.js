import "./Page.css";
function Button() {
	return (
		<button
			id="random-button"
			onClick={() => {
				console.log("hi");
			}}
		>
			BUTTON
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
