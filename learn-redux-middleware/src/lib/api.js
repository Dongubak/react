import axios from 'axios';

export const getPost = function(id) {
   return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const getUsers = function(id) {
   return axios.get(`https://jsonplaceholder.typicode.com/users`);
}