import React, {PropTypes, Component} from 'react';
import Comment from './Comment';
import Button from './Button';

class CommentList extends Component {

  state = {
    areCommentsOpen: false
  };

  render() {

    return (
        <section>
          {this.getToggler()}
          {this.getCommentList()}
        </section>
    );
  }

  toggleComments = (ev) => {
    this.setState({
      areCommentsOpen: !this.state.areCommentsOpen
    });
  };

  getToggler(){
    const buttonText = this.state.areCommentsOpen ? 'Hide Comments' : 'Show Comments';
    return <Button onClick={this.toggleComments} buttonText={buttonText}/>;
  }

  getCommentList () {
    if (!this.state.areCommentsOpen) return null;
    const { comments } = this.props;
    if (!comments || !comments.length) return <h3>no comments yet</h3>;
    const commentsData = comments.map((comment) => <Comment key={`comment-${comment.id}`} name={comment.name}
                                                            text={comment.text} title={comment.title}/>);
    return commentsData;
  }
}

CommentList.PropTypes = {
  comments: PropTypes.array
};

export default CommentList;

