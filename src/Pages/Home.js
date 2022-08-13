/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// getdocs is for getting the documents from the firebase collections
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import NavBar from "./NavBar";
import { auth, db } from "../Firebase/FirebaseConfig";

const Home = () => {
  const { isLoggedIn } = useSelector(({ auth }) => auth);

  // now we want to show the datas by fetching from the firebase collection
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  // where to post (db),in /posts particularly the collection of datas will be stored

  const getPostData = async () => {
    // inside getDocs we need to mention which firebase collection we are referrencing

    const receivedData = await getDocs(postCollectionRef);
    console.log(
      "data from firebase collection received===>",
      receivedData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setPostList(
      receivedData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  useEffect(() => {
    console.log("Home page rendered");
    getPostData();
  }, []);

  const deletePostHandler = async (id) => {
    // delete this post
    // db.collection("posts").doc(id).delete();
    // setPostList((post) => post.filter((doc) => doc.id !== id));
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPostData();
  };
  return (
    <>
      <NavBar />
      <div className="homePage">
        {postList.map(
          ({ id, post, title, author: { name, id: authorId } }, i) => {
            return (
              <div className="post" key={i}>
                <div className="postHeader">
                  <div className="title">
                    <h1>{title}</h1>
                  </div>
                  {isLoggedIn && authorId === auth.currentUser.uid && (
                    <div className="deletePost">
                      <button
                        onClick={() => {
                          deletePostHandler(id);
                        }}
                      >
                        &#128465;
                      </button>
                    </div>
                  )}
                </div>
                <div className="postTextContainer">{post}</div>
                <h3>{name}</h3>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Home;
