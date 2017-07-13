/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { Format } from '../utils/Format'

//主页话题的列表
class ArticleList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {articles} = this.props;
		let items = [];
		if ('id' in articles[0]) {
			items = articles.map((article,i) => {
				return (
					<div key={i} className="cell">
						<div className="member">
							<img src={article.member.avatar_normal}/>
						</div>
						<div className="title">
							<div>
								<Link to={`/t/${article.id}`} className="link-label">{article.title}</Link>
							</div>
							<div>
								<span className="info">
									{article.node.title} • {Format.date(article.last_touched)} • {article.replies}
								</span>
							</div>
						</div>
					</div>
				)
			})
		}
		return (
			<div className="article-container">
				{items}
			</div>
		)
	}
}

export default ArticleList
