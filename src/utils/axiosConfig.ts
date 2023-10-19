import axios from 'axios'
<<<<<<< HEAD
axios.defaults.baseURL = 'http://192.168.158.1:8088'
=======
axios.defaults.baseURL = 'http://127.0.0.1:8088'
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(
    (res) => {
         if (res.data.type === 'page') {
            return res.data.data.data
        }else if(res.data.type === 'add'){
            return res.data.data
        }else if(res.data.type === 'note'){
            return res.data.data.data
        }else if(res.data.type === 'modify'){
            return res.data.data
        }else if(res.data.type === 'search'){
            return res.data.data.data
        }else if(res.data.type === 'del'){
            console.log(res.data)
            return res.data
<<<<<<< HEAD
        }else if(res.data.type === 'count'){
            return res.data.data
=======
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
        }
    },
    (err) => {
        return Promise.reject(err)
    })
export default axios