import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "lib/styles/global/reset.scss";
import "lib/styles/global/template.scss";
import "lib/styles/global/text.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
