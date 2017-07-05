/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import Header from './Header'
import ArticleList from './ArticleList'


class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const title = {
			"/": "主页",
			"/hot": "热门",
		};

		return (
			<div>
				<Header pageName={title[this.props.match.url]}/>
				<ArticleList/>
			</div>
		)
	}
}

export default Home