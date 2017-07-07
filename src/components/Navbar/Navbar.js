/**
 * Created by Administrator on 2017/7/7.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {
	Container,
	Group,
	NavBar,
	amStyles,
	OffCanvas,
	OffCanvasTrigger,
} from 'amazeui-touch';


const withOffCanvas = {
	title: 'V2EX',
	leftNav: [{
		icon: 'list',
		component: OffCanvasTrigger,
		isClone: true, // IMPORTANT
		offCanvas: <OffCanvas>
			<div>
				<ul>
					<li><Link to="/python" onClick={this.props.changeTopics.bind(this,python)}>Python</Link></li>
					<li><Link to="/hot">热门</Link></li>
					<li><Link to="/latest">最新</Link></li>
					<li><Link to="/python">Python</Link></li>
				</ul>
			</div>
		</OffCanvas>,
	}],
	rightNav: [{
		href: 'https://github.com/xiongsyao',
		icon: 'person'
	}]
};

class Navbar extends React.Component {

	render() {
		return (
					<NavBar
						{...withOffCanvas}
						amStyle="primary"
					/>
		);
	}
}

export default Navbar;



