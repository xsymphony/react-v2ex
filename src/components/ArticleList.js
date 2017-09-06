/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import Article from './Article'
import Loading from './Loading'

//主页话题的列表
class ArticleList extends React.Component {
	static defaultProps = {
		articles: []
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { articles } = this.props;

		return (
			<div className="article-container">
				{ 'id' in articles[0] ? articles.map((article, i) => {
					return (
						<Article article={article} key={i}/>
 					)
				}) : <Loading/>}
			</div>
		)
	}
}

export default ArticleList
