import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUserTweets } from "../../actions/tweet_actions";

const mapStateToProps = (state, ownProps) => ({
  tweets: Object.values(state.tweets.user),
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserTweets: (id) => dispatch(fetchUserTweets(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
