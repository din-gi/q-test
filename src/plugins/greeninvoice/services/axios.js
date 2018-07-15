import axios from 'axios'
import config from '../config'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

axios.defaults.baseURL = config.api.baseUrl;

// axios.interceptors.request.use((requestConfig) => {
//     if(store.getters['auth/token'] != null){
//         requestConfig.headers['Authorization'] = `Bearer ${store.getters['auth/token']}`
//     }
//
//     if (process.env.NODE_ENV == 'production') {
//         requestConfig.url = requestConfig.url.replace('/api', config.api.baseUrl)
//         requestConfig.url = requestConfig.url.replace('/v1//','/v1/')
//     }
//
//     return requestConfig
// })
//
axios.interceptors.response.use(null, (error) => {
    console.log('axios error', error)
    if (error.response.status == 401) {
        //return Promise.reject(error.response)
        //store.commit('auth/LOGOUT')
    } else {
        return Promise.reject(error.response)
    }
})

export default axios