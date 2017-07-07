/**
 * Created by Administrator on 2017/7/4.
 */
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

import Home from '../components/HomePage/HomePage'
import AboutMe from '../components/AboutPage/AboutPage'

const App = () => (
	<Router>
		{/*	<div>
			<li><Link to="/programmer">程序员</Link></li>
			<li><Link to="/latest">最新</Link></li>
			<li><Link to="/hot">最热</Link></li>
			<li><Link to="/python">python</Link></li>
			<li><Link to="/about">关于</Link></li>
		</div>
		*/}
		<div>
			<Route exact path="/:topics" component={Home}/>
			<Redirect from="/" to="hot"/>
 		</div>
	</Router>
)


export default App;