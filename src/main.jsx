import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./UserReducer.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App.jsx";

const store = configureStore({
    reducer: {
        users: UserReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
