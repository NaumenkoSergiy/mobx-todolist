import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import todoStore from './store/todoStore'
import App from './components/App'
import 'todomvc-app-css/index.css'

export const StoreContext = React.createContext();

ReactDOM.render(
        <StoreContext.Provider todoStore={todoStore}>
            <App />
        </StoreContext.Provider >
    , document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}
