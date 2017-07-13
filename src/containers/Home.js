/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'
import ArticleList from '../components/ArticleList'


//主页
class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//根据当前路由加载相应的页面资源
		let topics = this.props.match.url.slice(1);
		if(topics) {
			this.props.actions.fetchTopics(topics)
		} else {
			this.props.actions.fetchTopics('hot')
		}
	}

	render() {
		return (
			<div>
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



export default connect(mapStateToProps, mapDispatchToProps)(Home);