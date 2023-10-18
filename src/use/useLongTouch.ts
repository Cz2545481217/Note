import { onMounted, onUnmounted, type Ref } from 'vue'
export default function useLongTouch(arr:Ref<null | HTMLElement>[],callbacks:Function){
    let timer = null
    let isMoving = false
    const touchStart = (e:any) => {
        const id = e.targetTouches[0].target.id
        timer = setTimeout(()=>{
            if(!isMoving){
                callbacks(id)
            }
        },1000)
    }
    const touchEnd = () => {
        clearTimeout(timer)
        isMoving = false 

    }
    const touchMove = () => {
        isMoving = true
    }
    onMounted(()=>{
        arr.forEach((item)=>{
            item.value?.addEventListener('touchstart',touchStart)
            item.value?.addEventListener('touchEnd',touchEnd)
            item.value?.addEventListener('touchMove',touchMove)
        })
    })
    onUnmounted(()=>{
        arr.forEach((item)=>{
            item.value?.removeEventListener('touchstart',touchStart)
            item.value?.removeEventListener('touchEnd',touchEnd)
            item.value?.removeEventListener('touchMove',touchMove)
        })
    })
}