import React, { PropTypes, Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {

	state = {
		isOpen: false
	};

	render() {
		const { article } = this.props;
		const { isOpen } = this.state;
		if (!this.props.article) return <h3>No article</h3>;
		return (
			<div>
				<h3 onClick={this.toggleOpen}>{article.title}</h3>
				{this.getArticleBody()}
			</div>
		)
	}

	toggleOpen = (ev) => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	getArticleBody() {
		const { article } = this.props;
		if (!this.state.isOpen) return null;
		return (
			<section>
				{article.text}
				<CommentList comments={article.comments}/>
			</section>
		)
	}
}

Article.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		text: PropTypes.string,
		id: PropTypes.string.isRequired,
		comments: PropTypes.array
	}),
	options: PropTypes.object
};

export default Article;