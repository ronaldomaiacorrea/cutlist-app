import { ProgressSpinner } from "primereact/progressspinner";
import { useGetGoogleSheet } from "../libs/API";
import { Message } from "primereact/message";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import PageTitle from "./PageTitle";

const Sheet = () => {
	const { data = [], isError, isLoading } = useGetGoogleSheet();

	const mapToObjects = ([keys, ...values]: string[][]) =>
		values.map((value) =>
			Object.fromEntries(value.map((v, i) => [keys[i], v]))
		);

	const renderContent = () => {
		if (isLoading)
			return (
				<ProgressSpinner
					style={{ width: "50px", height: "50px" }}
					strokeWidth="8"
					fill="var(--surface-ground)"
					animationDuration=".5s"
					aria-label="Loading"
				/>
			);

		if (isError)
			return (
				<Message
					className="w-full"
					severity="error"
					text="Error fetching data"
				/>
			);

		return (
			<div className="pb-4">
				<Panel header="Data table">
					<DataTable
						value={mapToObjects(data)}
						showGridlines
						stripedRows
						paginator
						rows={10}
						rowsPerPageOptions={[10, 20, 50]}
					>
						<Column field="Item_ID" header="Item ID"></Column>
						<Column field="Item" header="Item"></Column>
						<Column field="Checked_Qty" header="Checked Qty"></Column>
						<Column field="Total_Qty" header="Total Qty"></Column>
						<Column field="Width" header="Width"></Column>
						<Column field="Height" header="Height"></Column>
						<Column field="Depth" header="Depth"></Column>
						<Column field="Thk" header="Thk"></Column>
						<Column field="Finish" header="Finish"></Column>
						<Column field="Note" header="Note"></Column>
						<Column field="Room" header="Room"></Column>
						<Column field="Category" header="Category"></Column>
						<Column field="CheckMark" header="CheckMark"></Column>
						<Column field="Recut" header="Recut"></Column>
						<Column field="Job" header="Job"></Column>
						<Column field="Recut_Qty" header="Recut Qty"></Column>
						<Column field="Remaining_Qty" header="Remaining Qty"></Column>
						<Column field="Date" header="Date"></Column>
					</DataTable>
				</Panel>
			</div>
		);
	};

	return (
		<>
			<div className="py-4">
				<PageTitle title="Google Sheet" />
			</div>
			{renderContent()}
		</>
	);
};

export default Sheet;
