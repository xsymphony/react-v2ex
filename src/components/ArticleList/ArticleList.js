/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import axios from 'axios'


class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles:[]
		}
	}

	_getData(url){
		axios.get(url)
			.then(res => res.data)
			.then(data => (
				this.setState({
					articles:data
				})
			))
	}

	componentDidMount() {
		let topics = this.props.topics
		if(topics===undefined) {
			this._getData(`/api/topics/latest.json`)
		} else {
			if (topics==="hot") {
				this._getData(`/api/topics/hot.json`)
			} else {
				this._getData(`/api/topics/show.json?node_name=${topics}`)
			}
		}
	}

	render() {
		const {articles} = this.state
		return (
			<div>{articles.map((article,i) => {
				return (
					<div key={i}>
						<div>{article.title}</div>
						<img src={article.member.avatar_normal}/>
						<div>{article.member.username}</div>
						<hr/>
					</div>
				)
			})}</div>
		)
	}
}

export default ArticleList
