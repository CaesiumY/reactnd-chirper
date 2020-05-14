import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { HashRouter, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading ? (
              <h3 className="center">Loading...</h3>
            ) : (
              <div>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/tweet/:id" component={TweetPage}></Route>
                <Route path="/new" component={NewTweet}></Route>
              </div>
            )}
          </div>
        </Fragment>
      </HashRouter>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
