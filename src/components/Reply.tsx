"use client";

import { ReplyProps } from "@/libs/types";

export default function Reply({ ImagePath, username, replyTitle, likeNum }:ReplyProps) {
  return <div className="d-flex gap-2 my-2 ps-5">
  <img
    src={ImagePath}//"/profileImages/puppy.jpg"
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
    <span>{replyTitle}</span>
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span className="text-muted">{likeNum === 0 ? '' : likeNum} คน</span>
    </div>
  </div>
</div>
}
