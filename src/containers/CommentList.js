import React, { Component, PropTypes } from 'react'
import CommentList from '../components/CommentList.js'
import { connect } from 'react-redux'

class CommentListContainer extends Component {
	static propTypes = {

	};

	render() {
		return (
			<CommentList comments = {this.props.comments}  />
		)
	}
}

export default connect(state => ({
	comments: state.comments
}))(CommentListContainer)