import { defineStore } from 'pinia'
import type { Note,NoteItems } from "@/types"
import { getNotes,insertNote,searchNote,updateNote,searchNoteTerms,delNote,searchCount } from '@/api/note'
export const useListStore = defineStore( 'list',{
    state:() => {
        return {
            list: [] as Note[]        
        }
    },
    actions:{
        //获取分页笔记
        async getNotesList(index:number,count:number){
         const res = await getNotes<NoteItems>(index,count)
         return res
        },
        //新增笔记
        async addNoteList(data){
            return await insertNote<Note>(data)
        },
        //根据ID查询笔记
        async searchNoteList(id){
            return await searchNote(id)
        },
        //修改笔记
        async updateNoteList(data){
            return await updateNote<Note>(data)
        },
        //条件分页查询
        async searchNoteTerm(value:string,index:number,count:number){
            const res = await searchNoteTerms<Note>(value,index,count)
            this.list = res 
            return res
        },
        //删除笔记
        async delNote(params){
            return await delNote(params)
        },
        //获取总记录数
        async searchCount<T>(){
            return  await searchCount<number>()
            
        }
    }
})