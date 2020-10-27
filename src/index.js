import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from "redux";
import main from "./reducers/main.reducer";
import DataManager from "./utils/DataManager";
import createSagaMiddleware from 'redux-saga'
import LogMiddleware from "./middlewares/log.middleware";
import mainSaga from "./sagas/main.saga";

const sagaMiddleware = createSagaMiddleware(),
    middleware = [...(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? [LogMiddleware] : [], sagaMiddleware],
    store = createStore(combineReducers({main}), applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

function init() {
    DataManager.init();
    sagaMiddleware.run(mainSaga);
}

init();

export {store};
