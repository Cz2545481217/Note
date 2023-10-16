<script lang="ts" setup>
import router from '@/router';
import { reactive,ref,watch,nextTick ,onMounted} from 'vue';
import moment from 'moment';
import { useListStore } from '@/stores/noteList';
import { showFailToast, showSuccessToast } from 'vant';
const id = router.currentRoute.value.query
const now = moment(new Date()).format("yyyy-MM-d HH:mm:ss")
const store = useListStore()
const note = ref()
const state = reactive({
    note:{
        id:id,
        title:"",
        context:"",
        createOn:"",
        editOn:""
    }
})

//根据ID查询笔记
store.searchNoteList(id).then((res)=>{
            note.value = res
            state.note = note.value
            state.note.createOn = note.value.createOn
            state.note.editOn = now
      })
//点击编辑单条笔记
const doUpdate = () => {
     store.updateNoteList(state.note).then(( res ) => {
        if(res){
            showSuccessToast('修改成功')
            router.push('/list')
        }else{
            showFailToast('修改失败')
        }
     })
}
const backToHome = () => {
    router.back()
}
</script>
<template>
    <div class="add-note-box">
        <van-nav-bar>
            <template #left>
                <van-icon name="arrow-left" @click="backToHome"/>
            </template>
            <template #right>
                <van-icon  @click="doUpdate" name="success" size="18"></van-icon>
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