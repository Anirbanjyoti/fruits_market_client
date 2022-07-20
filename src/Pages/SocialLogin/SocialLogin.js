import Button from "react-bootstrap/Button";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
// import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  // Google Login
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  // const [token] = useToken(user || user1)
  const navigate = useNavigate();
    // Redirection page 
    // <RequireAuth>
      const location = useLocation();
    let from = location.state?.from?.pathname || "/";
   // </RequireAuth>
  let errorElement;
  if (error || error1 || error2) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1 ||user2) {
    navigate(from, { replace: true });
  }
  if (loading || loading1 || loading2) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="d-flex align-items-center or">
        <div className="w-50 bg-black" style={{ height: "1px" }}></div>
        <span className="mx-3">or</span>
        <div className="w-50 bg-black" style={{ height: "1px" }}></div>
      </div>
        {errorElement}
      <div className="social-btn d-grid">
        <Button
          onClick={() => signInWithGoogle()}
          className="btn-lg mb-2"
          variant="info"
        >
          Google Sign In
        </Button>
        <Button
          onClick={() => signInWithGithub()}
          variant="secondary"
          className="btn-lg mb-2"
        >
          Github Sign In
        </Button>
        <Button 
        onClick={() => signInWithFacebook()}
        variant="primary" 
        className="btn-lg mb-2">
          FaceBook Sign In
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
