/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from '../Navbar/Navbar'
import * as actions from '../../redux/Action/action'
import ArticleList from '../ArticleList/ArticleList'


class HomePage extends React.Component {
	constructor(props) {
		super(props);
		let topics = this.props.match.params.topics
		this.props.actions.fetchTopics(topics)
	}

	changeTheTopics(target) {
		this.props.actions.fetchTopics(target)
	}

	render() {
		return (
			<div>
				<Navbar/>
				<div>
					<Link to='/python' onClick={() => this.changeTheTopics('python')}>python</Link>
				</div>
				<ArticleList articles={this.props.data}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	let data = state.payload;
	if(data) {
		return {
			data: data
		}
	}
	return {data:[{}]}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions,dispatch)
});

const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);

export default Home