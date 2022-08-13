/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
// allows to add docs in the firebase store's tables /posts part

import NavBar from "./NavBar";
import { auth, db } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(({ auth }) => auth);

  const postCollectionRef = collection(db, "posts");
  // where to post (db),in /posts particularly the collection of datas will be stored
  const submitHandler = async () => {
    const bodyData = { title, post };
    console.log("submitted datas===>", bodyData);
    await addDoc(postCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    // mentions which collection we want to store the datas (here /posts)
    navigate("/");
  };
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create A Post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title..."
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post Title..."
              type="text"
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <button type="submit" onClick={submitHandler}>
            Submit!
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
