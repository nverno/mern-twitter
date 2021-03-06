import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, _ownProps) => ({
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
