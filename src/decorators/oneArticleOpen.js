import React, {Component} from 'react';

export default (CustomComponent) => class OneArticleOpen extends Component {

	constructor(props) {
		super();

		this.state = {
			openedArticle: null
		};
	}

	toggleOpen = id => ev => {
		const newId = this.state.openedArticle === id ? null : id;
		this.setState({
			openedArticle: newId
		})
	};

	render () {
		return  <CustomComponent {...this.props} openedArticle = {this.state.openedArticle} openArticle = {this.toggleOpen}/>
	}
}