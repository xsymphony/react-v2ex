/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import Header from '../Header/Header'
import ArticleList from '../ArticleList/ArticleList'


class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const title = {
			"/": "主页",
			"/hot": "最热",
		};

		return (
			<div>
				<Header pageName={title[this.props.match.url]}/>
				<ArticleList topic={this.props.match.url}/>
			</div>
		)
	}
}

export default Home