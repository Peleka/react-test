const addPost = 'ADD-POST'
const updateNewPost = 'UPDATE-NEW-POST'

let store = {
  _state : {
    profilePage: {
      posts: [
        {message: "Hello", id: 1, countLike: 0},
        {message: "How are you", id: 1,  countLike: 35}
      ],
      newPostText: "it-kamasutra"
    },
  
    messagesPage: {
      dialogsData: [
        { name: "Dimych", id: 1, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
        { name: "Kate", id: 2, img: "https://avatarko.ru/img/kartinka/31/zhivotnye_ptica_30474.jpg"},
        { name: "Dan", id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PfR93F19bRdIBQuXkH0dQ0MlKiTR5pn2Wg&usqp=CAU"},
        { name: "Andrey", id: 4, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
        { name: "Helen", id: 5, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
        { name: "Anna", id: 6, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"}
      ],
      messageData: [
        {message : "Hello", id: 1},
        {message : "Hi", id: 1},
        {message : "How are you", id: 1},
        {message : "Yo", id: 1},
        {message : "No", id: 1},
        {message : "Yo", id: 1}
      ]
    },
  
    siteBar: {
      avatar : [
        { name: "Andrey", id: 4, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
        { name: "Helen", id: 5, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
        { name: "Anna", id: 6, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"}
  
      ]
    }
  },
  _callSubscriber() {
    console.log("state changed")
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === addPost) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        countLike: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
      
      
    }
    else if(action.type === updateNewPost) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  }
}


export const addPostActionCreator = () => {
  return {
    type: addPost
  }
}

export const updateNewPostActionCreator = (post) => {
  return {
    type: updateNewPost,
    newText: post
  }
}


export default store;
window.store = store;