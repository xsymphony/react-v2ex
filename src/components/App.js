/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react'
import NavBar from './Navbar'


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