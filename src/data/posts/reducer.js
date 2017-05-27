
const initialState = {

}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_POSTS": {
      return Object.assign({}, state, action.posts)
    }

    default: {
      return state
    }
  }
}

export {postsReducer}
