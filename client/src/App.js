import logo from "./logo.svg";
import {
	FullPage,
	Slide,
} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./Page";

class App extends React.Component {
	render() {
		return (
			<div>
				<FullPage
					controls
					controlsProps={{ className: "slide-navigation" }}
				>
					<Slide>
						<div className="section-common section-area1">
							<Page />
						</div>
					</Slide>
					<Slide>
						<div className="section-common section-area2">
							<Page />
						</div>
					</Slide>
					<Slide>
						<div className="section-common section-area3">
							<Page />
						</div>
					</Slide>
					<Slide>
						<div className="section-common section-area4">
							<Page />
						</div>
					</Slide>
				</FullPage>
			</div>
		);
	}
}

export default App;
