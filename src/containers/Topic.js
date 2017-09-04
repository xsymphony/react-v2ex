/**
 * Created by Administrator on 2017/7/12.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'
import Topic from '../components/Topic'

class SmartTopic extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.actions.fetchTopic(id)
	}

	render() {
		let {topic, replies} = this.props
		return (
			<Topic topic={topic} replies={replies}/>
		)
	}
}

const mapStateToProps = state => {
	let topic = state.topic;
	let replies = state.replies;
	if(topic) {
		return {
			topic:topic,
			replies:replies
		}
	}
	return {topic:{},replies:[]}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions,dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(SmartTopic)