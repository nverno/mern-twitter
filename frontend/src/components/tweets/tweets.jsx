import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export const TweetBox = ({ text }) => (
  <div>
    <h3>{text}</h3>
  </div>
);

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = { tweets: [] };
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    if (this.state.tweets.length === 0)
      return <div>There are no tweets here.</div>;

    return (
      <div>
        <h2>All Tweets</h2>
        {this.state.tweets.map((tweet) => (
          <TweetBox key={tweet._id} text={tweet.text} />
        ))}
      </div>
    );
  }
}

export default withRouter(Tweets);
