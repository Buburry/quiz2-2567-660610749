"use client";

import { commentprops } from "@/libs/types";
import Reply from "@/components/Reply";
import { useEffect, useState } from "react";
  
export default function Comment({ 
    ImagePath,
    username,
    commentTitle,
    likes,
    replies, 
}:commentprops) {
  const [showReplies, setShowReplies] = useState<any>();
  const Replyuser = (() => {
    return setShowReplies(replies)
  })
  useEffect(() => {
    return setShowReplies(replies)
  },[])
  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src={ImagePath}                          //"/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentTitle}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likes === 0 ? '' : likes} คน</span>
            </div>
          </div>
        </div>
      {/* You can use map-loop to render Reply component here */}
      {replies.map(() => {
      <Reply
              key={username}
              ImagePath={ImagePath}
              username={username}
              replyTitle={replyTitle}
              likeNum={likeNum}
            />
      })} 
      
    </div>
  );
}
