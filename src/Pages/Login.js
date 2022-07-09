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
      // setIsAuth(true);
      console.log("The user has logged In");
      navigate("/");
    });
  };
  return (
<<<<<<< HEAD
    <div className="loginPage">
      <p> Sign In with Google to create Posts </p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Login</button>
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
=======
    <>
      <NavBar />

      <div className="loginPage">
        <p> Sign In with Google to create Posts </p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Login
>>>>>>> 3202b703d7a5f7dbeb45df3d1feb03064d60eda9
        </button>
      </div>
    </>
  );
};

export default Login;
