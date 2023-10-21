import { API_ENDPOINT } from "../utils/config";

import { useQuery } from "react-query";
import axios from "axios";

export enum QueryKeys {
	GET_GOOGLE_SHEET = "getGoogleSheet",
}

export const useGetGoogleSheet = () =>
	useQuery([QueryKeys.GET_GOOGLE_SHEET], async () => {
		const {
			data: { values },
		} = await axios.get(API_ENDPOINT);
		return values;
	});
