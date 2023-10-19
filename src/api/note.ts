
import axios from "../utils/axiosConfig"
import  {Note}  from "@/types"
//获取笔记列表
export  function  getNotes<T>(index: number, count: number) {
    return axios({
        method: 'get',
        url: '/page',
        params: {
            index: index, 
            count: count 
        }
    }) as Promise<T>
}
//删除笔记
export function delNote<T>(id:string)
{
    return axios({
        method:'delete',
        url:'/del',
        params:{ id: id }
    })
}
//更新笔记
export function updateNote<T>(note:Note)
{
    return axios({
        method:'put',
        url:'/modify',
        data:note
    })
}
//新增笔记
export function insertNote<T>(data)
{
    return axios({
        url:'/add',
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        data
    })
}
//根据ID查询笔记
export function searchNote(id){
    return axios({
        url:'/note',
        method:'get',
        params:id
    })
}
//条件分页查询
export function searchNoteTerms<Note>(value:string,index:number,count:number){
    return axios({
        url:'/search?value='+value+'&index='+index+'&count='+count,
        method:'get',
    })
}
//获取总记录数
export function searchCount<T>(){
    return axios({
        url:'/count',
        method:'get'
    })
}