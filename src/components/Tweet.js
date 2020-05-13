import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

export class Tweet extends Component {
  render() {
    console.log(this.props);
    return <div className="tweet"></div>;
  }
}

const mapStateToProps = ({ tweets, users, authedUser }, { id }) => {
  const tweet = tweets[id];
  return {
    users,
    tweet: formatTweet(tweet, users[tweet.author], authedUser),
  };
};

export default connect(mapStateToProps)(Tweet);
