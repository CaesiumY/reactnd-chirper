import React, { Component } from "react";

export class NewTweet extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;

    this.setState({ text });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("The new tweet is:", this.state.text);

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;
    return (
      <div>
        <h3 className="center">Compose a New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            className="textarea"
            maxLength={280}
            placeholder="what's happening?"
            value={text}
            onChange={this.handleChange}
          ></textarea>
          {tweetLeft <= 100 && <div className="tweet-left">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewTweet;
