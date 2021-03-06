import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params; 
    // params match all wildcard tokens available in the url
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!post){
      return<div>loading...</div>
    }

    return(
      <div>
        <Link 
          to="/" 
          className = "btn btn-primary">
          Back to Index
        </Link>
        <button
          className = "btn btn-denger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//            application state     props that are incoming to PostsShow
//                           |       equivalent to this.props inside render()
//                           |          |
function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);