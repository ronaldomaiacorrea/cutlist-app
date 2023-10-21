import PageTitle from "./PageTitle";
import { useGetGoogleSheet } from "../libs/API";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";
import { DataView } from "primereact/dataview";
import { Panel } from "primereact/panel";
import type { Job } from "../libs/types";
import React from "react";
import { Button } from "primereact/button";

const getJobsList = (data: string[][]) => {
	const jobsList: string[] = [];
	for (let index = 1; index < data.length; index++) {
		jobsList.push(data[index][15]);
	}

	return jobsList;
};

const Jobs: React.FC = () => {
	const { data = [], isError, isLoading } = useGetGoogleSheet();
	const listJobs = data ? getJobsList(data) : [];

	const getJobs = (data: string[][]) => {
		const jobs: Job[] = [];
		const jobSet = new Set<string>();

		for (let index = 1; index < data.length; index++) {
			if (listJobs.includes(data[index][15])) {
				const name = data[index][15];
				if (!jobSet.has(name)) {
					jobSet.add(name);
					jobs.push({ name, date: new Date(data[index][18]) });
				}
			}
		}

		return jobs;
	};

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

		const itemTemplate = (job: Job) => {
			return (
				<div className="py-4 col-12">
					<Panel header={job.name}>
						<div className="card col-10">
							<h4>Date: {job.date.toISOString().split("T")[0]}</h4>
						</div>
						<div className="col-2">
							<Button>Details</Button>
						</div>
					</Panel>
				</div>
			);
		};

		return <DataView value={getJobs(data)} itemTemplate={itemTemplate} />;

		// return getJobs(data).map((job) => (
		// 	<div className="py-4">
		// 		<Panel header={job.name}>
		// 			<div className="card">
		// 				Date: {job.date.toISOString().split("T")[0]}
		// 			</div>
		// 		</Panel>
		// 	</div>
		// ));
	};

	return (
		<>
			<div className="py-4">
				<PageTitle title="Jobs" />
			</div>
			{renderContent()}
		</>
	);
};

export default Jobs;
