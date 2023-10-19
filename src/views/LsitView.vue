<script lang="ts" setup>
import { Note, NoteItems, noteListStates } from '@/types'
import { ref, onMounted, watch, nextTick, reactive,getCurrentInstance } from 'vue'
import { useListStore } from "@/stores/noteList"
import moment from 'moment'
import { useRouter } from 'vue-router'
import { showConfirmDialog, showFailToast, showSuccessToast } from 'vant';
import {debounce} from '@/utils/debounce'
const notes = ref([] as NoteItems)
const items = ref([] as HTMLElement[])
const code = ref()
const {proxy,ctx}:any = getCurrentInstance()
const _this = ctx
const refListBox = ref<null | HTMLElement>(null)
//点击笔记跳转至编辑页面
const router = useRouter()
const goNote = (id:any) => {
      router.push({
        name:'note',
        query:{id}
      })
    }
const stateV = reactive({
  value:'',
  page:1,
  count:1000000000
})
//点击跳转至添加界面
const goAdd = () => {
    router.push('/add')
}
const intiList = () => {
  store.getNotesList(stateV.page,stateV.count).then((res) => (
    notes.value = res
    ))
}
//状态管理
const store = useListStore()
const noteListState: noteListStates = {
  leftList: [],
  rightList: []
}
//条件查询事件
const searchs = () => {
  store.searchNoteTerm(stateV.value,stateV.page,stateV.count).then((res)=>{
       items.value = []
       notes.value = res
  })
}
//清除文本框
const searchClear = () => {
  store.getNotesList(stateV.page,stateV.count).then((res)=>{
    items.value = []
    notes.value = res
  })
}
const state = reactive(noteListState)
//  瀑布流渲染
const initLRlist = () => {
  let leftHeightSum = 0
  let rightHeightSum = 0
  let leftArr: Note[] = []
  let rightArr: Note[] = []
  nextTick(() => {
    //日期格式转换
    items.value!.forEach((item,index)=>{
      notes.value[index].createOn = moment(notes.value[index].createOn).format('yyyy年MM月D日')
    })
    //左右元素遍历赋值
    items.value!.forEach((item, index) => {
      if (leftHeightSum <= rightHeightSum) {
        leftArr.push(notes.value[index])
        leftHeightSum += item?.clientHeight
      } else {
        rightArr.push(notes.value[index])
        rightHeightSum += item?.clientHeight
      }
    })
    state.leftList = leftArr.reverse()
    state.rightList = rightArr.reverse()
  })
}

//删除笔记
const delNote = (id:any) => {
  event?.stopPropagation()
  showConfirmDialog({
    title:'提示',
    message:'是否删除该条笔记',
  })
  .then(()=>{
    store.delNote(id).then((res)=>{
        if(res){
          showSuccessToast("删除成功")      
          searchClear()
        }else{
          showFailToast("删除失败")
          searchClear()
        }
    })
    
  })
  
}
onMounted(() => {
  intiList()
  //节流
  // useLoadMore(refListBox,loadMore)
})
watch(notes, () => {initLRlist()})
let timeOutEvent = 0
watch(()=>stateV.value,debounce(searchs,1000))

</script>
<template>
    <van-nav-bar >
      <template #left>
        <van-search class="van-search"  @search="searchs" @clear="searchClear" placeholder="搜索笔记" input-align="center" v-model="stateV.value"></van-search>
      </template>
      <template #right>
        <van-icon name="plus" @click="goAdd" />
      </template>
    </van-nav-bar>
    <div class="note-box">
      <div class="list-box" ref="refListBox">
      <div class="list-left" ref="lefDom">
        <div class="list-item"  @click="goNote(note.id)"  v-for="note in state.leftList" :key="note['id']">
          <van-icon @click="delNote(note.id)" name="cross" style="color: red; float: right;"/>
          <div class="item-content">
            <p class="item-text">
              {{ note.title }}
            </p>
          </div>
          <div class="item-bottom">
            <p class="item-text">
              {{ note.createOn }}
            </p>
          </div>
        </div>
      </div>
      <div class="list-right" ref="rightDom">
        <div class="list-item" @click="goNote(note.id)"  v-for="note in state.rightList" :key="note['id']">
          <van-icon @click="delNote(note.id)" name="cross" style="color: red; float: right;"/>
          <div class="item-content">
            <p class="item-text">
              {{ note.title }}
            </p>
          </div>
          <div class="item-bottom">
            <p class="item-text">
              {{ note.createOn }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="init-list">
          <div class="list-item" v-for="note in notes" :key="note['id']" :ref="(el) => {
            if (el != null) {
              items.push(el as HTMLElement)
            }
          }"></div>
        </div>
      </div>
    </div>
    
    <van-icon name="plus" />
  </div>
</template>
<style scoped lang="scss">
.note-box {
  width: 100%;
  overflow: hidden;
  flex: 1;
  padding: 0 0.1rem;
  box-sizing: border-box;
  .van-search{
    :v-deep(.van-search__content){
      background-color: rgb(247, 247, 247);
      border-radius: 0.2rem;
    }
    background-color: rgb(247, 247, 247);
  }
  .list-box {
    width: 100%;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      /* 滚动条宽 */
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      /* 滚动条 拖动条 */
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      /* 滚动条背景槽 */
      background-color: #eee;
      border-radius: 6px;
    }

    .list-left {
      width: 50%;
      float: left;
      padding-bottom: 50px;
      padding-left: 5px;
    }

    .list-right {
      width: 50%;
      float: left;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-end;
      padding-bottom: 50px;
      padding-right: 5px;
    }

    .init-list {
      width: 50%;
      /* background-color: rgb(122, 129, 127); */
      position: absolute;
      visibility: hidden;
      height: 2rem;
      overflow: hidden;
    }

    .list-item {
      box-sizing: border-box;
      width: 95%;
      max-height: 2rem;
      background-color: rgb(245, 245, 245);
      border-radius: 0.15rem;
      margin-top: 0.1rem;
      padding: 0.2rem;
      position: relative;
      box-shadow: 2px 2px 9px #ccc;

      .item-content {
        max-height: 1.25rem;
        font-size: 0.16rem;
        line-height: 0.25rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        color: rgb(99, 99, 99);

        .item-text:first-line {
          color: rgb(27, 27, 27);
          font-weight: 600;
        }
      }

      .item-bottom {
        height: 0.35rem;
        color: rgb(151, 151, 151);
        display: flex;
        align-items: flex-end;
      }

      .click-model {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
}
</style>