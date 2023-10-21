import type { Row } from "../libs/types";

const API_KEY = "AIzaSyAobGq0zz0em4NYAsRnlY0338wjkulwm2U";
const SPREADSHEET_ID = "1XpAYWCY4OFfBFTXlbDK9pt-2DahnTU7vv-GwvsbfHjM";

export const API_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/List?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`;

type TransposedData = Record<string, Row[]>;

export const transposeData = (data: Row[]) => {
	const reunitedData: TransposedData = {};

	for (let i = 1; i < data.length; i++) {
		const row = data[i];
		const job = row.Job;

		if (!reunitedData[job]) {
			reunitedData[job] = [];
		}

		reunitedData[job].push(row);
	}

	const result: Record<string, Row> = {};

	for (const job in reunitedData) {
		if (reunitedData[job]) {
			const rows = reunitedData[job];

			// Initialize sums
			let remainingQtySum = 0;
			let remainingQtyTotalSum = 0;

			for (const row of rows) {
				// Convert Remaining_Qty and Remaining_Qty_Total to numbers
				const remainingQty = parseFloat(row.Remaining_Qty);
				const remainingQtyTotal = parseFloat(row.Remaining_Qty_Total);

				// Sum up the values for each row
				remainingQtySum += remainingQty;
				remainingQtyTotalSum += remainingQtyTotal;
			}

			// Create an object with the summed values
			result[job] = {
				...rows[0], // Copy the first row (assumes all other values are the same for the same job)
				Remaining_Qty: remainingQtySum.toString(),
				Remaining_Qty_Total: remainingQtyTotalSum.toString(),
			};
		}
	}

	return result;
};
