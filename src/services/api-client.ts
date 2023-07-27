import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e3deadde0de7441ca68c4c1f935fa538'
    }

})