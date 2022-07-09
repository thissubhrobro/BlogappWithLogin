import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import { authActions } from "../store/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log("isLoggedIn from navbar", isLoggedIn);

  const logOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(authActions.logout());
      localStorage.clear();
      console.log("User logged Out", !isLoggedIn);
      navigate("/login");
    });
  };
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createPost">CreatePost</Link>
        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button
            onClick={logOutHandler}
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: "18px",
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </>
  );
};

export default NavBar;
