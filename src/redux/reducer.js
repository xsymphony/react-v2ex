/**
 * Created by Administrator on 2017/7/6.
 */
const Reducer = (state = {}, action) => {
	console.log(action.type);
	switch (action.type) {
		case "GET_TOPICS":
			return {
				payload: action.payload
			};
		case "GET_TOPIC":
			return {
				topic: action.topic,
				replies: action.replies
			};
		default:
			return state
	}
}

export default Reducer