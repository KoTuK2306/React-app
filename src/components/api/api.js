import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1448266e-a619-447f-bb11-326f4e967e15",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(id) {
    return instance.post(`follow/${id}`);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateUserStatus(status) {
    return instance.put(`profile/status`, {status: status})
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
