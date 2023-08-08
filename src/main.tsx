import {createRoot} from "react-dom/client";
import "./styles/index.css";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from "@/App.tsx";
import {store} from "@/store/store.ts";
import {UiComponents} from "@/components/UiComponents.tsx";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <HashRouter>
            <UiComponents/>
            <App/>
        </HashRouter>
    </Provider>
);
