import { defineStore } from 'pinia'
import type { Note,NoteItems } from "@/types"
<<<<<<< HEAD
import { getNotes,insertNote,searchNote,updateNote,searchNoteTerms,delNote,searchCount } from '@/api/note'
=======
import { getNotes,insertNote,searchNote,updateNote,searchNoteTerms,delNote } from '@/api/note'
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
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
<<<<<<< HEAD
=======
         this.list = res
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
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
<<<<<<< HEAD
        async searchNoteTerm(value:string,index:number,count:number){
            const res = await searchNoteTerms<Note>(value,index,count)
=======
        async searchNoteTerm(params){
            const res = await searchNoteTerms<Note>(params)
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
            this.list = res 
            return res
        },
        //删除笔记
        async delNote(params){
            return await delNote(params)
<<<<<<< HEAD
        },
        //获取总记录数
        async searchCount<T>(){
            return  await searchCount<number>()
            
=======
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
        }
    }
})