/**
 * Created by Administrator on 2017/7/7.
 */
import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			spread: true
		}
	}

	onChaneSpread() {
		this.setState({
			spread: !this.state.spread
		})
	}

	render() {
		return (
			<div className="container">
				<div className="header">
					<div className="left-icon">
						<Link to="/latest">Home</Link>
					</div>
					<div className="title">React</div>
					<div className="right-icon">
						<Link to="/aboutme">About</Link>
					</div>
				</div>
				{this.state.spread ?
					<div className="navbar">
						<div className="navbar-item">
							<Link to="/hot">最热</Link>
						</div>
						<div className="navbar-item">
							<Link to="/latest">最新</Link>
						</div>
						<div className="navbar-item">
							<Link to="/python">python</Link>
						</div>
						<div className="navbar-item">
							<Link to="/nodejs">node.js</Link>
						</div>
						<div
							className="navbar-item"
							onClick={this.onChaneSpread.bind(this)}>
							More>>
						</div>
					</div>
					:
					<div className="navbar navbar-detail">
						<div className="detail-header-left">切换话题</div>
						<div
							className="detail-item"
							onClick={this.onChaneSpread.bind(this)}>
							收起
						</div>
						<div className="detail-item">
							<Link to="/hot">最热</Link>
						</div>
						<div className="detail-item">
							<Link to="/latest">最新</Link>
						</div>
						<div className="detail-item">
							<Link to="/programmer">程序员</Link>
						</div>
						<div className="detail-item">
							<Link to="/linux">Linux</Link>
						</div>
						<div className="detail-item">
							<Link to="/qna">问与答</Link>
						</div>
						<div className="detail-item">
							<Link to="/jobs">酷工作</Link>
						</div>
						<div className="detail-item">
							<Link to="/apple">Apple</Link>
						</div>
					</div>
				}
			</div>
		)
	}
}

export default NavBar;



