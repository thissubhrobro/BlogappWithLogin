import { useEffect } from "react";
// import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  useEffect(() => {
    console.log("Home page rendered");
  }, []);

  return (
    <>
      <NavBar />
      <div className="homePage">Home</div>
    </>
  );
};

export default Home;
