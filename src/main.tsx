import {createRoot} from 'react-dom/client'
import './styles/index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from "@/App.tsx";
import {store} from "@/store/store.ts";

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
)
