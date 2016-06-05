import React, { PropTypes, Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {

	render() {
		const { article, openArticle } = this.props;
		if (!this.props.article) return <h3>No article</h3>;
		return (
			<div>
				<h3 onClick={openArticle}>{article.title}</h3>
				{this.getArticleBody()}
			</div>
		)
	}

	getArticleBody() {
		const { article, isOpen } = this.props;
		if (!isOpen) return null;
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
	isOpen: PropTypes.bool,
	openArticle: PropTypes.func,
	options: PropTypes.object
};

export default Article;