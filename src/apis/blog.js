import axios from 'axios';

const APP_ID = '6128bf4588c786567b917815';
const BASE_URL = 'https://dummyapi.io/data/v1/';

export default axios.create(BASE_URL, {
    headers: {
        'app-id': APP_ID
    }
});