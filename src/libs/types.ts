// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    ImagePath: string, 
    username: string, 
    replyTitle: string, 
    likeNum: number,
}
export type { ReplyProps };

interface commentprops {
    ImagePath: string,
    username: string,
    commentTitle: string,
    likes: number,
    replies: ReplyProps[],
}
export type { commentprops };