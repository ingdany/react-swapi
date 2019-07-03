import axios from 'axios';

/*[7] Define Api*/
export default axios.create({
    baseURL: 'https://swapi.co/api'
});