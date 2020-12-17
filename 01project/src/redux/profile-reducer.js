const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let initialState = {
  posts: [
    {message: "Hello", id: 1, countLike: 0},
    {message: "How are you", id: 1,  countLike: 35}
  ],
  newPostText: "it-kamasutra"
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        countLike: 0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST:
      state.newPostText = action.newText
      return state;
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (post) => {
  return {
    type: UPDATE_NEW_POST,
    newText: post
  }
}

export default profileReducer