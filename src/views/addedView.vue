<script lang="ts" setup>
    import {useListStore} from '@/stores/noteList'
    import moment from 'moment'
    import { reactive } from 'vue'
    import { showFailToast, showSuccessToast, showToast } from 'vant'
    import {useRouter}  from 'vue-router'
    const router = useRouter()
    const now = moment(new Date()).format("yyyy-MM-d HH:mm:ss")
    const store = useListStore()
    const state = reactive({
        note:{
            id:'',
            title:'',
            context:'',
            createOn:'',
            editOn:''
        }
    })
    
    //UUID创建
    const UUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
    const doAddNotes = () => {
        state.note.createOn = now
        state.note.editOn = now
        state.note.id = UUID()
        store.addNoteList(state.note).then((res)=>{
            console.log(res)
            if(res){
                showSuccessToast("添加成功")
                router.push('/list')
            }else{
                showFailToast("添加失败")
            }
        })
    }
</script>
<template>
    <div class="add-note-box">
        <van-nav-bar >
            <template #left>
                <van-icon name="arrow-left" @click="()=>{router.push('/list')}"/>
            </template>
            <template #right>
                <van-icon  @click="doAddNotes" name="success" size="18"></van-icon>
            </template>
        </van-nav-bar>
        <van-field  v-model="state.note.title" class="title-filed" rows="1" autosize type="textarea" placeholder="请输入标题" />
        <van-field  v-model="state.note.context" class="context-filed" rows="6" autosize type="textarea" placeholder="请输入内容" />
    </div>
</template>
<style lang="scss" scoped>
 .add-note-box{
    width: 100%;
    overflow-x:hidden ;
    overflow-y: auto;
    flex: 1;
    background: #fff;
    .title-filed{
        font-size: 0.22rem;
    }
    .context-filed{
        font-size: 0.15rem;
    }
 }
</style>