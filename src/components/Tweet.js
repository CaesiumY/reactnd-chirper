import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartFullOutline,
  TiHeartOutline,
} from "react-icons/ti/index";
import { handleToggleTweet } from "../actions/tweets";

export class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();

    this.props.history.push(`/tweet/${id}`);
  };

  handleLike = (e) => {
    e.preventDefault();

    const { id, authedUser, tweet, dispatch } = this.props;

    dispatch(
      handleToggleTweet({
        id,
        authedUser,
        hasLiked: tweet.hasLiked,
      })
    );
  };

  render() {
    const { tweet } = this.props;
    const {
      id,
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
      <Link to={`/tweet/${id}`} className="tweet">
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
      </Link>
    );
  }
}

const mapStateToProps = ({ tweets, users, authedUser }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};

export default withRouter(connect(mapStateToProps)(Tweet));
