let initialState = {
  friends: [
    {
      id: 1,
      name: 'Ana',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400'
    },
    {
      id: 2,
      name: 'Nick',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU'
    },
    {
      id: 3,
      name: 'Mom',
      avatar: 'https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/meikebartels-sm.jpg'
    },
  ],
}

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;
