/**
 * Created by Administrator on 2017/7/6.
 */
const Reducer = (state = {}, action) => {
	console.log(action.type);
	switch (action.type) {
		case "TOPICS":
			return {
				payload: action.payload
			}
		case "TOPIC":
			return {
				topic: action.payload.topic,
				replies: action.payload.replies
			}
		default:
			return state
	}
}

export default Reducer