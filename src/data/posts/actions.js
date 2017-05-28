
export function receivePosts(posts) {
  console.log('hit')
  return {
    type: "RECIEVE_POSTS",
    posts
  }
}
