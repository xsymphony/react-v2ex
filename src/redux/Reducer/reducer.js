/**
 * Created by Administrator on 2017/7/6.
 */
const Reducer = (state = {}, action) => {
	console.log(action.type);
	switch (action.type) {
		case "GET_TOPICS":
			return {
				type:action.type,
				payload: action.payload
			}
		case "GET_TOPIC":
			return {
				topic: action.payload.topic,
				replies: action.payload.replies
			}
		default:
			return state
	}
}

export default Reducer