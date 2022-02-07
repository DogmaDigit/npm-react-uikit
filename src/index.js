import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "styles/global/reset.scss";
import "styles/global/template.scss";
import "styles/global/text.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
