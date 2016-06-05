import React, { PropTypes, Component } from 'react';
import Article from './Article';
import oneArticleOpen from '../decorators/oneArticleOpen.js';

class ArticleList extends Component {

    render() {
        const { articles, openedArticle, openArticle } = this.props;

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === openedArticle}
                     openArticle = {openArticle(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    //toggleOpen = id => ev => {
    //    //const newId = this.state.openedArticle === id ? null : id;
    //    this.setState({
    //        openedArticle: newId
    //    })
    //}

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default oneArticleOpen(ArticleList);
