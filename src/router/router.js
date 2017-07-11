/**
 * Created by Administrator on 2017/7/4.
 */
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'

import App from '../components/App'
import Home from '../components/HomePage'
import AboutMe from '../components/AboutPage'
import Topic from '../components/Topic'


/*Todo:bug:
  使用react-router-dom时，若路由写为<Router path="/:topics" component={Home}/>,
  其组件采用this.props.match.params.topics形式捕获路由参数，根据topics不同渲染页面，
  在此情况下，

  ***两个<Router path="/:topics" component={Home}/>间，能通过<a/>标签进行页面跳转，
     而通过<Link/>跳转后无法进行页面的重新渲染***

  （猜测为此时阻止了ajax事件）
  解决方法为
  1：用<a/>跳转，或给<Link/>加上与组件props相关的onClick事件，但这样<Link/>与<a/>表现
     没有差异(等同于重新加载页面，性能低)
  2: 放弃<Router path="/:topics" component={Home}/>写法，针对每一个页面写成
     <Router path="/url" component={Home}/>的形式。
     这里暂选第二种
  */
const AppRoute = () => (
	<Router>
		<Switch>
			<Route path="/" component={(props) => (
				<App {...props}>
					<Route exact path="/">
						<Redirect to="/hot"/>
					</Route>
					<Route path="/hot" component={Home}/>
					<Route path="/latest" component={Home}/>
					<Route path="/python" component={Home}/>
					<Route path="/nodejs" component={Home}/>
					<Route path="/qna" component={Home}/>
					<Route path="/jobs" component={Home}/>
					<Route path="/apple" component={Home}/>
					<Route path="/linux" component={Home}/>
					<Route path="/programmer" component={Home}/>
					<Route path="/aboutme" component={AboutMe}/>
					<Route path="/t/:id" component={Topic}/>
				</App>
			)}/>
		</Switch>
	</Router>
)


export default AppRoute;