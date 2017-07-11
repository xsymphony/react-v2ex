/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react'
import NavBar from './Navbar'

//使所有路由都加载NavBar组件
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<NavBar/>
				{this.props.children}
			</div>
		)
	}
}

export default App