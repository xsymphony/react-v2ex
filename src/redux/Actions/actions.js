/**
 * Created by Administrator on 2017/7/5.
 */
import axios from 'axios'


const GET_NEW = "GET_NEW"

const recevied = (type, data) = {
	switch (type){
		case "GET_NEW":
			return {
				type: type,
				data: data
			}
			default:
				return {}
	}
}

export const fetchTopics = options => dispatch => {
	const type = types.TOPICS
	let url = ''
	if (options) {
		if (options.node_name ===)
	}
}
