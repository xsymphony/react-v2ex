/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'
import { Format } from '../Format'
import OnLoading from './OnLoading'


//加载对应话题下的详情与回复
class Topic extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.actions.fetchTopic(id)
	}

	render() {
		const {topic,replies} = this.props;

		//获取回复列表
		let repliesItems = [];
		if(replies.length>0) {
		repliesItems = replies.map((reply,i) => {
			return (
				<div key={i} className="reply-container">
					<div className="reply-avatar"><img src={reply.member.avatar_mini}></img></div>
					<div className="reply-content">
						<div><span>{reply.member.username}</span></div>
						<div
							dangerouslySetInnerHTML={{__html: reply.content_rendered}}/>
					</div>
				</div>
			)
		})}

		return (
			<div>
			{topic.member ?
				<div className="topic-container">
					<div className="topic">
						<div className="topic-title">
							<div className="left-info">
								<div><strong>{topic.title}</strong></div>
								<div><span>{topic.member.username} {Format.date(topic.last_modified)}</span></div>
							</div>
							<div className="right-avatar">
								<img src={topic.member.avatar_normal} className="right-avater-img"></img>
							</div>
						</div>
						<div
							dangerouslySetInnerHTML={{__html: topic.content_rendered}}/>
					</div>
					{repliesItems}
				</div> : <OnLoading/> }
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
	return {topic:{},replies:[]}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions,dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Topic)