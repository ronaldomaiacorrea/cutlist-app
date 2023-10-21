export interface Item {
	name: string;
	width?: string;
	height?: string;
	depth?: string;
	thk?: string;
	checkQty?: number;
	totalQty?: number;
	remainQty?: number;
	note?: string;
}

export interface Category {
	name: string;
	items?: Item[];
}

export interface Room {
	name: string;
	categories: Category[];
	items: Item[];
}

export interface Job {
	name: string;
	date: Date;
}

// id: string;
// rooms: string[];
// Item: string;
// Checked_Qty: string;
// Total_Qty: string;
// Width: string;
// Height: string;
// Depth: string;
// Thk: string;
// Finish: string;
// Note: string;
// Room: string;
// Category: string;
// CheckMark: string;
// Recut: string;
// Job: string;
// Recut_Qty: string;
// Remaining_Qty: string;
// Date: string;
// Remaining_Qty_Total: string;
