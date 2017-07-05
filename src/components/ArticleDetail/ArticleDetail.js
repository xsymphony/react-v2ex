/**
 * Created by Administrator on 2017/7/5.
 */
import React from 'react'


class ArticleDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: null
		}
	}

	ComponentWillMount() {
		axios.get(`/api/topics/latest.json`)
			.then(res=>{
				this.setState({
					articles: res.data
				})
			})
	}
}