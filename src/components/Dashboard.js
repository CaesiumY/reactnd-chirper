import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map((id, index) => (
            <li key={id}>
              <Tweet id={id}></Tweet>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(Dashboard);
