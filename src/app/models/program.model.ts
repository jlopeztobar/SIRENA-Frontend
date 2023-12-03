import { Faculty } from "./faculty.model";

export interface Program{
    id: number,
    name: string,
    faculty: Faculty,

}