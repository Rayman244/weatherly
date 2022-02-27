const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  });