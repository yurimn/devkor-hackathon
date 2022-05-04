import logo from "./logo.svg";
import {
	FullPage,
	Slide,
} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import "./App.css";
import React from "react";
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
							<div className="page">
								<Page name="intro" />
							</div>
						</div>
					</Slide>
					<Slide>
						<div className="section-common section-area2">
							<div className="page">
								<Page name="meal" />
							</div>
						</div>
					</Slide>
					<Slide>
						<div className="section-common section-area3">
							<div className="page">
								<Page name="joy" />
							</div>
						</div>
					</Slide>
					<Slide>
						<div className="section-common section-area4">
							<div className="page">
								<Page />
							</div>
						</div>
					</Slide>
				</FullPage>
			</div>
		);
	}
}

export default App;
