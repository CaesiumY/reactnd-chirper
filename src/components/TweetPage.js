import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

export class TweetPage extends Component {
  render() {
    const { id, replies } = this.props;
    return (
      <div>
        <Tweet id={id}></Tweet>
        <NewTweet id={id}></NewTweet>
        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {replies.map((replyId) => (
            <li key={replyId}>
              <Tweet id={replyId}></Tweet>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }, props) => {
  const { id } = props.match.params;

  return {
    id,
    replies: tweets[id].replies.sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(TweetPage);
