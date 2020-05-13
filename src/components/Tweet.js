import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartFullOutline,
  TiHeartOutline,
} from "react-icons/ti/index";

export class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    // TODO
  };

  handleLike = (e) => {
    e.preventDefault();
  };

  render() {
    const { tweet } = this.props;
    const {
      name,
      timestamp,
      text,
      avatar,
      likes,
      replies,
      hasLiked,
      parent,
    } = tweet;

    if (tweet === null) {
      return <p>This tweet does not exist.</p>;
    }

    return (
      <div className="tweet">
        <img className="avatar" src={avatar} alt={`${name}'s Avatar`} />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={(e) => {
                  this.toParent(e, parent.id);
                }}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>

          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon"></TiArrowBackOutline>
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked ? (
                <TiHeartFullOutline
                  color="e0245e"
                  className="tweet-icon"
                ></TiHeartFullOutline>
              ) : (
                <TiHeartOutline className="tweet-icon"></TiHeartOutline>
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets, users, authedUser }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    users,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};

export default connect(mapStateToProps)(Tweet);
