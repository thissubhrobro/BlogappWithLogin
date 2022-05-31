import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  console.log("Home page rendered");
  return (
    <>
      <NavBar />
      <h4> In home... </h4>
      {/* <Link to="/login">
        <button>Login</button>
      </Link> */}
    </>
  );
};

export default Home;
