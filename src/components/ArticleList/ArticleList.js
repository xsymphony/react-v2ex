/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import axios from 'axios'
import Link from 'react-router-dom'


class ArticleList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {articles} = this.props
		let items = [];
		if ('id' in articles[0]) {
			items = articles.map((article,i) => {
				return (
					<div key={i}>
						<div>{article.title}</div>
						<img src={article.member.avatar_normal}/>
						<div>{article.member.username}</div>
						<hr/>
					</div>
				)
			})
		}
		return (
			<div>
				{items}
			</div>
		)
	}
}

export default ArticleList
