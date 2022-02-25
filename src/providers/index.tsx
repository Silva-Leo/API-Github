import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.github.com/users/"
  });

// export const Api = axios.create({
//     baseURL:"https://api.github.com",
//     client_id:"a54655889e6ed2018673",
//     client_secret:"e0b314f8205e322f3e18f3783adf194f00141c4f"
// });

