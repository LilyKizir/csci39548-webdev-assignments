import { QueryStore } from "./QueryStore";
import Query from "./Query";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

const QueryApp = ()=>{
    ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store = {QueryStore}>
            <Query/>
        </Provider>
    )
}

export default QueryApp
