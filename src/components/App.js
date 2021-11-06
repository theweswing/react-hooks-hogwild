import React, {useState} from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer"
import Filter from "./Filter"
import hogs from "../porkers_data";
import HogForm from "./HogForm"

function App() {
	const [active_hogs,set_active_hogs]=useState(hogs)
	const [all_hogs,set_all_hogs]=useState(hogs)
	return (
		<div className="App">
			<Nav />
			<Filter all_hogs_={all_hogs} set_all_hogs_={set_all_hogs} active_hogs_={active_hogs} set_active_hogs_={set_active_hogs} />
			<HogContainer active_hogs_={active_hogs} set_active_hogs_={set_active_hogs} />
			<br></br><br></br>
			<HogForm all_hogs_={all_hogs} set_all_hogs_={set_all_hogs} />
		</div>
	);
}

export default App;
