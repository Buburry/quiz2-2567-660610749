"use client";

import { ReplyProps, commentprops } from "@/libs/types";
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
  
  useEffect(() => {
    return setShowReplies(replies)
  },[replies])

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

              {likes > 0 && (
              <>
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{`${likes} คน`}</span>
              </>
              )}
            </div>
          </div>
        </div>
      {/* You can use map-loop to render Reply component here */}
      {showReplies && showReplies.map((reply:ReplyProps) => (
        <Reply
          key={reply.username}
          ImagePath={reply.ImagePath}
          username={reply.username}
          replyTitle={reply.replyTitle}
          likeNum={reply.likeNum}
        />
      ))}
      
    </div>
  );
}
