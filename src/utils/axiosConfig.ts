import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.246.4:8088'
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
        }
    },
    (err) => {
        return Promise.reject(err)
    })
export default axios