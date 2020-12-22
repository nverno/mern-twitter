import {
  RECEIVE_TWEETS,
  RECEIVE_NEW_TWEET,
  RECEIVE_USER_TWEETS,
} from "../actions/tweet_actions";

export default (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let ns = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TWEETS:
      ns.all = action.tweets.data;
      return ns;

    case RECEIVE_USER_TWEETS:
      ns.user = action.tweets.data;
      return ns;

    case RECEIVE_NEW_TWEET:
      ns.new = action.tweet.data;
      return ns;

    default:
      return state;
  }
};
