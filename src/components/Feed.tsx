/* eslint-disabled react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

import { db } from "../firebase";
import TweetInput from "./TweetInput";
import styles from "./Feed.module.css";
import Post from "./Post";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      avatar: "",
      image: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unSub = onSnapshot(q, (snapshot: any) =>
      setPosts(
        snapshot.docs.map((doc: any) => ({
          id: doc.id,
          avatar: doc.data().avatar,
          image: doc.data().image,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
          username: doc.data().username,
        }))
      )
    );
    return () => {
      unSub();
    };
  }, []);

  return (
    <div className={styles.feed}>
      <TweetInput />
      {posts[0]?.id && (
        <>
          {posts.forEach((post) => {
            <Post
              key={post.id}
              postId={post.id}
              avatar={post.avatar}
              image={post.image}
              text={post.text}
              timestamp={post.timestamp}
              username={post.username}
            />;
            // return posts;
          })}
        </>
      )}
    </div>
  );
};

export default Feed;
