import { Link } from "react-router-dom";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <div className="loginPage">
      <p> Sign In with Google to create Posts </p>
      <button className="login-with-google-btn">Login</button>
      <Link to="/">
        <button
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Login;
