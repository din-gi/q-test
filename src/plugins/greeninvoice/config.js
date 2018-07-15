import {clone,extend} from 'quasar'
let env = 'production'

if(window != undefined && window.location.hostname != undefined){
    if (window.location.hostname.includes('localhost')){
        env = 'local'
    } else {
        env = 'production'
    }
}

let baseConfig = {
    shared: {
        env,
        api: {
            publicKey: 'HWxzvUsdoTHEzD#XgDyXGeXutDvksBoPzAJ'
        }
    },
    local: {
        api: {
            baseUrl: "https://test.d.greeninvoice.co.il/api/v1"
        }
    },
    staging: {

    },
    production: {
        api: {
            baseUrl: "https://www.greeninvoice.co.il/api/v1"
        }
    }
}

let baseConfigClone = clone(baseConfig)
let envConfig = extend(true, baseConfigClone.shared, baseConfigClone[env])

export default envConfig