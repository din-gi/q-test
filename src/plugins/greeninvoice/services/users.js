import axios from './axios'

class Users
{
    static login(payload) {
        return axios.post('/account/login', payload);
    }
}

export default Users