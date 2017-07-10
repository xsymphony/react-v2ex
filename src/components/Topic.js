/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'


class Topic extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let id = this.props.match.params.id
		this.props.actions.fetchTopic(id)
	}

	render() {
		const {topic,replies} = this.props;
		//获取回复列表
		let repliesItems = [];
		if(replies[0].id) {
		repliesItems = replies.map((reply,i) => {
			return (
				<div key={i} className="reply-container">
					<img src={reply.member.avatar_normal}></img>
					<div>{reply.member.username}</div>
					<div
						dangerouslySetInnerHTML={{__html: reply.content_rendered}}/>
					<hr/>
				</div>
			)
		})}

		return (
			<div className="topic-container">
			{topic.member&&replies[1] ?
				<div>
					<div>
						<div>{topic.title}</div>
						<div>{topic.member.username}</div>
						<img src={topic.member.avatar_large}></img>
						<div
							dangerouslySetInnerHTML={{__html: topic.content_rendered}}/>
					</div>
					<hr/>
					{repliesItems}
				</div> : <div className="onload">加载中...</div> }
			</div>
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
	return {topic:{},replies:[{}]}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions,dispatch)
});

const Topics = connect(mapStateToProps, mapDispatchToProps)(Topic)
export default Topics