import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from "./redux/store"
import AppRoute from "./router/router"
import "./style/style.css"


ReactDOM.render(
	<Provider store={store}>
		<AppRoute/>
	</Provider>,
	document.getElementById("box")
);