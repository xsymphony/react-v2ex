/**
 * Created by Administrator on 2017/9/6.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { Format } from '../utils/Format'

class Article extends React.Component {
	static defaultProps = {
		article: {}
	};

	constructor(props) {
		super(props)
	}

	render() {
		const {article}=this.props
		return (
			<div>
				<div className="cell">
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
			</div>
		)
	}
}

export default Article