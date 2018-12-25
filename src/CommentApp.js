import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment(comment) {
    // console.log(comment)
    // if(!comment) return
    if(!comment.username) return alert('请输入用户名')
    if(comment.username.length > 10) return alert('用户名不得超过10个字符')
    if(!comment.content) return alert('请输入评论内容')
    this.state.comments.unshift(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}
export default CommentApp