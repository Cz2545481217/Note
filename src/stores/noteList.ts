import { defineStore } from 'pinia'
import type { Note,NoteItems } from "@/types"
import { getNotes,insertNote,searchNote,updateNote,searchNoteTerms,delNote } from '@/api/note'
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
         if(index === 1){
            this.list = res   
         }else{
            this.list.push(...res)
         }
         
         return [...res]
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
        async searchNoteTerm(params){
            const res = await searchNoteTerms<Note>(params)
            this.list = res 
            return res
        },
        //删除笔记
        async delNote(params){
            return await delNote(params)
        }
    }
})