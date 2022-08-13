/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
// getdocs is for getting the documents from the firebase collections
import { collection, getDocs } from "firebase/firestore";
import NavBar from "./NavBar";
import { db } from "../Firebase/FirebaseConfig";

const Home = () => {
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

  return (
    <>
      <NavBar />
      <div className="homePage">
        Home
        {postList.map(({ id, post, title }) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
