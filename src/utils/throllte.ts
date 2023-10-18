export default function throllte(fn:Function,wait:number){
    let timer = 0
    return function(...args:any){
        const now = Date.now()
        if(now-timer > wait){
            fn()
        }
    }
}