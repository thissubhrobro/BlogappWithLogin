import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import NavBar from "./NavBar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("idToken", true);
      dispatch(authActions.login());
      console.log("The user has logged In");
      navigate("/");
    });
  };
  return (
    <>
      <NavBar />

      <div className="loginPage">
        <p style={{ textAlign: "center" }}>
          Sign In with Google to create Posts{" "}
        </p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
