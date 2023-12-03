import { Building } from "./building.model"

export interface Classroom{
    id: number,
    name: string,
    capacity: number,
    state: string,
    building:Building,
    classroomType: ClassroomType
}
interface ClassroomType{
    id: number,
    name: string
}