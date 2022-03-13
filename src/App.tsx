import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import storeRedux from "./redux/Store";
import Index from "./pages";
import 'antd/dist/antd.css';
import './assets/styles/style.bundle.css';

function App() {
    return (
        <Provider store={storeRedux}>
            <Index/>
        </Provider>
    );
}

export default App;
