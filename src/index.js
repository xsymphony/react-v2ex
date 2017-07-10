import React from "react"
import ReactDOM from "react-dom"
import AppRoute from "./router/router"
import "./App.css"

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reducer from './redux/reducer'


const store = createStore(
	Reducer,
	applyMiddleware(thunk)
);


ReactDOM.render(
	<Provider store={store}>
		<AppRoute/>
	</Provider>,
	document.getElementById("box")
);