export interface Note{
    id?:string,
    title:string,
    context:string,
    createOn:string,
    editOn:string
}
export type NoteItems = Note[]

export interface noteListStates{
    leftList:Note[],
    rightList:Note[]
}