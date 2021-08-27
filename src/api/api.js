import * as axios from 'axios';

let instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": '8efbf2d6-8b1b-4248-87d0-24f8444c16a7',
  }
});

const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  followUser(userId) {
    return instance.post('follow/' + userId).then(response => response.data);
  },
  unfollowUser(userId) {
    return instance.delete('follow/' + userId).then(response => response.data);
  }
};

export const ProfileAPI = {
  getProfileInfo(userId) {
    return instance.get('profile/' + userId).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId).then(response => response.data);
  },
  updateStatus(status) {
    return instance.put('profile/status/',{status}).then(response => response.data);
  },
};

export const AuthAPI = {
  me() {
    return instance.get('auth/me').then(response => response.data);
  },
  logIn(email, password, rememberMe, captcha) {
    return instance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data);
  },
  logOut() {
    return instance.delete('auth/login').then(response => response.data);
  },
};

export default UsersAPI;
