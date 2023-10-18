export function debounce(fn:Function,wait:number){
    let timer:any
    return function(...args:any){
        if(timer)clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(args)
            clearTimeout(timer)
    },wait)
    }
}