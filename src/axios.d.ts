// 新建 axios.d.ts
import axios from 'axios'

declare module 'axios' {
 interface IAxios<D = null> {
   code: string
   message: string
   extra: D
 }
 export interface AxiosResponse<T = any> extends IAxios<D> {}
}
