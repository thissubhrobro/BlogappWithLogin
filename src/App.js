import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NavBar from "./Pages/NavBar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
