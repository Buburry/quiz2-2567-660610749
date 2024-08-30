"use client"

import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { useEffect, useState } from "react";
import { commentprops } from "@/libs/types";
import { comments } from "@/libs/comments";
export default function Home() {
  const [users, setUsers] = useState<commentprops[]>([]);
  
  

  // useEffect(() => {
  //     return setUsers(comments);
  useEffect(() => {
     setUsers(comments.map((comment) => ({
      ImagePath: comment.userImagePath,
      username: comment.username,
      commentTitle: comment.commentText,
      likes: comment.likeNum,
      replies: comment.replies?.map((reply:any) => ({

        ImagePath: reply.userImagePath,
        username: reply.username,
        replyTitle: reply.replyText,
        likeNum: reply.likeNum,
      })) || [],
    })));
  }, []);
  
 // }, []);

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner />

        {/* Comment Example */}
        {users.map((user) => {
          return (
            <Comment
              key={user.username}
              ImagePath={user.ImagePath}
              username={user.username}
              commentTitle={user.commentTitle}
              likes={user.likes}
              replies={user.replies}
            />
          );
        })};

        {/* Reply Example */}
        

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
