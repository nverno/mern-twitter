import React, { Component } from "react";
import { TweetBox } from "./tweets";

export default class TweetCompose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      newTweet: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newTweet: nextProps.newTweet.text });
  }

  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      text: this.state.text,
    };

    this.props.composeTweet(tweet);
    this.setState({ text: "" });
  }

  handleChange(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={text}
              onChange={this.handleChange("text")}
              placeholder="Write your tweet..."
            />

            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <TweetBox text={this.state.newTweet} />
      </div>
    );
  }
}
