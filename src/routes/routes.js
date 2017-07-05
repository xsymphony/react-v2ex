/**
 * Created by Administrator on 2017/7/4.
 */
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch
} from 'react-router-dom'

import Home from '../components/HomePage'
import HotTopic from '../components/HotTopicPage'
import AboutMe from '../components/AboutPage'
const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">主页</Link></li>
				<li><Link to="/?tab=programmer">程序员</Link></li>
			</ul>
			<ul>
				<li><Link to="/">最新</Link></li>
				<li><Link to="/hot">最热</Link></li>
				<li><Link to="/about">关于</Link></li>
			</ul>
			<Route exact path="/" component={Home}/>
			<Route path="/hot" component={Home}/>
			<Route path="/about" component={AboutMe}/>
		</div>
	</Router>
)


export default App;