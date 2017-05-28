
export function fetchComments(postId) {
  return {
    type: "COMMENTS_REQUESTED",
    postId
  }
}
