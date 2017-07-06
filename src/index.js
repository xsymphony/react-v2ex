import React from "react"
import ReactDOM from "react-dom"
import App from "./router/router"

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reducer from './redux/Reducer/reducer'

//import 'amazeui-touch/dist/amazeui.touch.css';

const store = createStore(
	Reducer,
	applyMiddleware(thunk)
);


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("box")
);