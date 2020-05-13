import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

export class Tweet extends Component {
  render() {
    const { tweet } = this.props;
    console.log(this.props);

    if (tweet === null) {
      return <p>This tweet does not exist.</p>;
    }

    return <div className="tweet"></div>;
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
