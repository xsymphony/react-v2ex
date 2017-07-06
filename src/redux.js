/**
 * Created by Administrator on 2017/7/6.
 */
import { createStore,combineReducers } from 'redux'

const defaultState = 0;

//构建reducer
const reducer = (state = defaultState,action) => {
	switch (action.type) {
		case 'ADD':
			return state + action.payload;
		default:
			return state;
	}
}

/*将Reducer传入createStore方法,使得可以通过store.dispat触发Reducer.
*而不用手动调用，
* 手动调用：
		const state = reducer(1, {
			type: 'ADD',
			payload: 2
			});
*/
const store = createStore(reducer);  //创建store

const state = store.getState();  //state代表某个时点的数据集合


/*Action是一个对象，其中Action的type属性必须设置，其他属性可以自定义
	在上例中 reducer中 { type: 'ADD', payload: 2 } 就是一个action，或者：
  eg: const action = {
        type: 'ADD_TODO',
        payload: 'Something'
  但是这样，随着View发送Action的增多，需要手动自定很多同type的Action，
  可以使用函数生成Action， 称为Action Creator
 */
//Action Creator
const ADD_TODO = 'ADD_TODO';

const addTodo = text => {
	type: ADD_TODO;
	text
}

//创建对应的action：
const action = addTodo('Something');
//或者直接dispatch函数生成的action：
sotre.dispatch(addTodo('there can be anything'));


//Reducer的拆分:
const totalReducer = combineReducers({addReducer,otherReducer});


/*
**中间件**
 */

//改写了store.dispatch，在发送action前后打印
let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
	console.log('dispatching', action);
	next(action);
	console.log('next state', store.getState());
};
//用redux-logger实现上述功能：
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();

const store = createStore(
	reducer,
	applyMiddleware(logger)
);
