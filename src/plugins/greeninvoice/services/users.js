import axios from './axios'

class Users
{
    static login(payload) {
        return axios.post('/api/account/login', payload);
    }
}

export default Users