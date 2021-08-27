const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage});

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Ana',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400'
    },
    {id: 2, name: 'Chloe', avatar: 'https://i.pinimg.com/originals/1e/a6/ce/1ea6cea6021ab93aa0ad45512e0a3e53.jpg'},
    {id: 3, name: 'Alex', avatar: 'https://www.nme.com/wp-content/uploads/2020/05/connell-chain.jpg'},
    {
      id: 4,
      name: 'Nick',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU'
    },
    {
      id: 5,
      name: 'Mom',
      avatar: 'https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/meikebartels-sm.jpg'
    },
    {
      id: 6,
      name: 'Dad',
      avatar: 'https://i.cbc.ca/1.5927916.1614287216!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_780/walkie-charles.jpeg'
    }
  ],
  messages: [
    {id: 1, message: 'What`s up!'},
    {id: 2, message: 'Hi! How r u?'},
    {id: 3, message: 'Fine, thanks. And u?'},
    {id: 4, message: 'too...'}
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages.length,
        message: action.newMessage,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
}

export default dialogsReducer;
