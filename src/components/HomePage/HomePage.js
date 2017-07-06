/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import Header from '../Header/Header'
import ArticleList from '../ArticleList/ArticleList'
import {
	Button,Loader,NavBar,Container,Group
} from 'amazeui-touch';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const title = {
			"/": "主页",
			"/hot": "最热",
		};
		const topics = this.props.match.params.topics
		console.log(topics)

		return (
			<div>



						<Header pageName={topics}/>
						<ArticleList topics={topics}/>


			</div>
		)
	}
}

export default Home