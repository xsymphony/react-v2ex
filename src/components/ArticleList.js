/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'
import axios from 'axios'


class ArticleList extends React.Component {
	render() {
		axios.get(``)
			.then(function(response){
				console.log(response);
			})
			.catch(function(err){
				console.log(err);
			});
		return (
			<div>axios</div>
		)
	}
}

export default ArticleList