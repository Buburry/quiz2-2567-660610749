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
  
//  const Commentuser = () => {
//     // const newComment: commentprops = {
//     //   ImagePath: "path_to_image",
//     //   username: "user_name",
//     //   commentTitle: "comment_title",
//     //   likes: 0,
//     //   replies: [],
//     // };
//    // setUsers((prevUsers) => [...prevUsers, newComment]);
//     const commentuser = users.map((user) => {
//       // Perform any necessary cleaning or validation on user data
//       return {
//         username: comments[0].username,
//         ImagePath: comments[0].userImagePath,
//         commentTitle: comments[0].commentText,
//         likes: comments[0].likeNum,
//         replies: comments[0].replies,
//       };
//     //})
//     setuesrs(commentuser)
//     // setUsers(() => [
//     //   {
//     //     username: comments[0].username,
//     //     ImagePath: comments[0].userImagePath,
//     //     commentTitle: comments[0].commentText,
//     //     likes: comments[0].likeNum,
//     //     replies: comments[0].replies,
//     //   },
//     // ]);
//   })}
  const impoertcomment = () => {
    const commentuser = users.map((user) => {
      // Perform any necessary cleaning or validation on user data
      return {
        username: comments[0].username,
        ImagePath: comments[0].userImagePath,
        commentTitle: comments[0].commentText,
        likes: comments[0].likeNum,
        replies: comments[0].replies,
      };
    });
    setUsers(commentuser);
  }
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
