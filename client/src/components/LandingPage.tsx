import Sheet from "./Sheet";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import logo from "../assets/icons8-cut-80.png";
import Jobs from "./Jobs";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";

const LandingPage = () => {
	const navigate = useNavigate();
	const start = (
		<div className="flex flex-row pr-4">
			<div className="flex align-items-center">
				<img alt="Cutlist Logo" src={logo} height="80" className="mr-2" />
			</div>
			<div className="flex align-items-center">
				<h1>CutList App</h1>
			</div>
		</div>
	);
	const end = <InputText placeholder="Search" type="text" className="w-full" />;

	const items: MenuItem[] = [
		{
			label: "Jobs",
			command: () => {
				navigate("/");
			},
		},
		{
			label: "Google Sheet",
			command: () => {
				navigate("/sheets");
			},
		},
	];
	return (
		<div className="px-4">
			<Menubar model={items} start={start} end={end} />
			<Routes>
				<Route path="/" Component={Jobs} />
				<Route path="/sheets" Component={Sheet} />
			</Routes>
		</div>
	);
};

export default LandingPage;
