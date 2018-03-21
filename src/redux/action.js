/**
 * Created by Administrator on 2017/7/5.
 */
import axios from 'axios'

const BASE_URL = "https://www.v2ex.com"

const GET_TOPICS= "GET_TOPICS";
const GET_TOPIC = "GET_TOPIC";


//Action Creator
const received = (type, data) => {
	switch (type) {
		case GET_TOPICS:
			return {
				type: type,
				payload: data
			};
		case GET_TOPIC:
			return {
				type: type,
				topic: data.topic,
				replies: data.replies
			};
		default:
			return {}
	}
}


//获取指定话题下所有内容的异步action
export const fetchTopics = topics => dispatch => {
	let url = '';
	if(topics) {
		if (topics === 'hot') {
			url = BASE_URL + `/api/topics/hot.json`
		} else if(topics === 'latest') {
			url = BASE_URL + `/api/topics/latest.json`
		} else {
			url = BASE_URL + `/api/topics/show.json?node_name=${topics}`
		}
	} else {
		url = BASE_URL + `/api/topics/latest.json`
	}
	console.log(`axios.get url:${url}`);
	return axios.get(url)
		.then(res => res.data)
		.then(data => dispatch(received(GET_TOPICS, data)))
}


//获取某一帖子下内容和回复的异步action
export const fetchTopic = id => dispatch => {
	const result = {'topic':{},'replies':[]};
	let topicUrl = BASE_URL + `/api/topics/show.json?id=${id}`;
	let repliesUrl = BASE_URL + `/api/replies/show.json?topic_id=${id}`;
	console.log(topicUrl,repliesUrl);
	return axios.get(topicUrl)
		.then(res => res.data)
		.then(data => {
			result.topic = data[0];
			axios.get(repliesUrl)
				.then(res => res.data)
				.then(data => {
					result.replies = data;
					dispatch(received(GET_TOPIC, result));
				})
		})
}

