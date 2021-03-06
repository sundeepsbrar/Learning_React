import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class PostForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br></br>
            <input type = "text" name = "title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <div>
            <label>Body: </label><br></br>
            <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
          </div>
          <br></br>
          <button type = "submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);