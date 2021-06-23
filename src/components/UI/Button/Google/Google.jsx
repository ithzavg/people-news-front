// Import libraries
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
// Import logos
import GoogleLogo from '../../../../assets/svgs/google.svg';
// Import actions
import { successGoogleLogin, errorGoogleLogin } from '../../../../redux/actions/authActions';

export const Component = ({ successGoogleLogin, errorGoogleLogin }) => (
  <GoogleLogin
    // App id from app created in Google Cloud Platform
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    // Function that will handle the success Google response
    onSuccess={successGoogleLogin}
    // Function that will handle the error Google response
    onFailure={errorGoogleLogin}
    // Render custom button
    render={({ onClick }) => (
      <button 
        className="login__button" 
        type="button" 
        onClick={onClick} 
      >
        <img src={GoogleLogo} alt="Google logo" />
      </button>
    )}
  />
);

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  successGoogleLogin(data) {
    dispatch(successGoogleLogin(data))
  },
  errorGoogleLogin(data) {
    dispatch(errorGoogleLogin(data))
  }
});

export const GoogleButton = connect(null, mapDispatchToProps)(Component);