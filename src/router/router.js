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

import Home from '../components/HomePage/HomePage'
import HotTopic from '../components/HotTopicPage/HotTopicPage'
import AboutMe from '../components/AboutPage/AboutPage'

const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">主页</Link></li>
				<li><Link to="/programmer">程序员</Link></li>
				<li><Link to="/python">Python</Link></li>
				<li><Link to="/nodejs">Nodejs</Link></li>
				<li><Link to="/linux">Linux</Link></li>
				<li><Link to="/">最新</Link></li>
				<li><Link to="/hot">最热</Link></li>
			</ul>
			<Route exact path="/" component={Home}/>
			<Route exact path="/hot" component={Home}/>
			<Route exact path="/:name" component={Home}/>
		</div>
	</Router>
)


export default App;