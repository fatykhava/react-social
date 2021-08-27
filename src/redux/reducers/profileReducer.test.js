import profileReducer, {addPost} from "./profileReducer";

let initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are you?',
      avatar: 'https://i.ytimg.com/vi/XM4vQGcKEEo/maxresdefault.jpg',
      likesCount: 5
    },
    {
      id: 2,
      message: 'It\'s my first post',
      avatar: 'https://i.insider.com/5d35bf63454a3947b349c915?width=1136&format=jpeg',
      likesCount: 23
    }
  ],
}

test('after adding of new post posts.length should be incremented', () => {
  const action = addPost('add text post');
  const newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(3);
});
