/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react'


class Header extends React.Component {
	render() {
		return (
			<div>
				{this.props.pageName}
			</div>
		)
	}
}

export default Header