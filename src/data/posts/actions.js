
export function receivePosts(posts) {
  console.log('hit')
  return {
    type: "RECIEVE_POSTS",
    posts
  }
}

export function fetchPosts() {
  console.log('fetch')
  return {
    type: "POSTS_REQUESTED"
  }
}
