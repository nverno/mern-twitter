import { connect } from "react-redux";
import TweetCompose from "./tweet_compose";
import { composeTweet } from "../../actions/tweet_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  newTweet: state.tweets.new,
});

const mapDispatchToProps = (dispatch) => ({
  composeTweet: (data) => dispatch(composeTweet(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetCompose);
