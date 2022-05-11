import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/createPost">CreatePost</Link>
      </nav>
    </>
  );
};

export default NavBar;
