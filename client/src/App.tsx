import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LandingPage from "./components/LandingPage";
import { PrimeReactProvider } from "primereact/api";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PrimeReactProvider>
				<BrowserRouter>
					<LandingPage />
				</BrowserRouter>
			</PrimeReactProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
