// import something here
import * as Mixins from './greeninvoice/mixins'
import * as Services from './greeninvoice/services'
import GiLogo from '../components/gi-logo'
import Vuelidate from 'vuelidate'

// leave the export, even if you don't use it
export default ({app, router, Vue}) => {
    // something to do

    for (let key in Mixins) {
        Vue.mixin(Mixins[key])
    }
    Vue.component('GiLogo', GiLogo)
    Vue.use(Vuelidate)
    Vue.prototype.$services = Services;
}
