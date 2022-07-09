import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./Pages/CreatePost";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
<<<<<<< HEAD
import NavBar from "./Pages/NavBar";
import "./App.css";

=======
>>>>>>> 3202b703d7a5f7dbeb45df3d1feb03064d60eda9
const App = () => {
  // const [isAuth, setIsAuth] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("isLoggedIn======>", isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
