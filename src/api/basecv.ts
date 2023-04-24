import axios from 'axios';

const BaseApi = axios.create({
  baseURL: 'https://qa.cvcrm.com.br/api/'
});

export default BaseApi;