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
        id: 6,
        message: state.newPostText,
        countLike: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST: 
      return {
        ...state,
        newPostText: action.newText
      };
    default: return state
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