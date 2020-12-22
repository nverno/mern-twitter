import { connect } from "react-redux";
import Tweets from "./tweets";
import { fetchTweets } from "../../actions/tweet_actions";

const mapStateToProps = (state, ownProps) => ({
  tweets: Object.values(state.tweets.all),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTweets: () => dispatch(fetchTweets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
