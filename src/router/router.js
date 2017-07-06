/**
 * Created by Administrator on 2017/7/4.
 */
import React from "react";
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import { Provider } from "react-redux"
import store from "../redux/Store/store"

import Home from '../components/HomePage/HomePage'
import AboutMe from '../components/AboutPage/AboutPage'

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home}/>
			<Route exact path="/:topics" component={Home}/>
		</div>
	</Router>
)


export default App;