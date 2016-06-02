import React, {PropTypes, Component} from 'react';
import Comment from './Comment';
import Button from './Button';

class CommentList extends Component {

  state = {
    areCommentsOpen: false
  };

  render() {
    const { comments } = this.props;
    const { areCommentsOpen } = this.state;
    const buttonText = areCommentsOpen ? 'Hide' : 'Show';
    const commentsData = comments.map((comment) => <Comment key={`comment-${comment.id}`} name={comment.name}
                                                           text={comment.text} title={comment.title}/>);
    const commentsList = areCommentsOpen ? commentsData : null;

    return (
        <section>
          <Button onClick={this.toggleComments} buttonText={buttonText}/>
          {commentsList}
        </section>
    );
  }

  toggleComments = (ev) => {

    this.setState({
      areCommentsOpen: !this.state.areCommentsOpen
    });
  }
}

CommentList.PropTypes = {
  comments: PropTypes.array
};

export default CommentList;

