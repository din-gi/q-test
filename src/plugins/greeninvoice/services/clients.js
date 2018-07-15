import axios from './axios'
import store from 'src/store'

class Clients
{
    static search(payload) {
        let options = {
            headers: {
                'Authorization': `Bearer ${store.getters['auth/Auth']}`,
                //${store.getters['auth/token']}`,
                'Content-Type': 'application/json'
            },
        }
        return axios.post('/api/clients/search', payload, options);
    }

    static add(payload) {
        let options = {
            headers: {
                'Authorization': `Bearer ${store.getters['auth/Auth']}`,
                //${store.getters['auth/token']}`,
                'Content-Type': 'application/json'
            },
        }
        return axios.post('/api/clients', payload, options);
    }
}

export default Clients