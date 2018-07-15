import axios from './axios'
//import store from 'src/store'

class Clients
{
    static search(payload) {
        let options = {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.bGh2V21TMlNHbERuLWtBcTNtQ2NiUQ.TffzB2vF7CJ25_7xqwuWhg.b2vAEvJeseZZIHwluLoC4saHE85KbEYp3ZoW0MmBriFmUCN6b69gO-k7ma_1w-lR71Py-L-dKDzht5zSgdYv202BI6SAZPOUGj_rWtWWgh3TKcOHpAmx7Ql3cyt4pqukvAr0Rx_zEHhCcLtn-0GLn7narv3jjIccm99n3czlbyFvd2kd2Q-xFkvgMti7xbueWN_IIAUjy9vgLrWKU3SLA5uWJwi9U0-iWZ1M22XWuGemE3NiSRWX6drSWT4aOmW3Bmd7vqL4PGDFwhw81t50odDh_yhmEj7HXDZhml4EB-jCo3DnqO_3QwWyv5DnaVC7O0bDeM1YXTYjOynhHWPE7Q.qNEK-FLSLhXcef5yeMepMg`,
                //${store.getters['auth/token']}`,
                'Content-Type': 'application/json'
            },
        }
        return axios.post('/clients/search', payload, options);
    }

    static add(payload) {
        let options = {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.bGh2V21TMlNHbERuLWtBcTNtQ2NiUQ.TffzB2vF7CJ25_7xqwuWhg.b2vAEvJeseZZIHwluLoC4saHE85KbEYp3ZoW0MmBriFmUCN6b69gO-k7ma_1w-lR71Py-L-dKDzht5zSgdYv202BI6SAZPOUGj_rWtWWgh3TKcOHpAmx7Ql3cyt4pqukvAr0Rx_zEHhCcLtn-0GLn7narv3jjIccm99n3czlbyFvd2kd2Q-xFkvgMti7xbueWN_IIAUjy9vgLrWKU3SLA5uWJwi9U0-iWZ1M22XWuGemE3NiSRWX6drSWT4aOmW3Bmd7vqL4PGDFwhw81t50odDh_yhmEj7HXDZhml4EB-jCo3DnqO_3QwWyv5DnaVC7O0bDeM1YXTYjOynhHWPE7Q.qNEK-FLSLhXcef5yeMepMg`,
                //${store.getters['auth/token']}`,
                'Content-Type': 'application/json'
            },
        }
        return axios.post('/clients', payload, options);
    }
}

export default Clients