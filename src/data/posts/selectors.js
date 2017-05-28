
export const getPosts = (state) => state.posts.ids.map( id => state.posts.byId[id])
