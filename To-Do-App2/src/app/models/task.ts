import { Time } from "@angular/common";

export interface task {
    id: number,
    title: string,
    description: string,
    date: Date,
    time: Time,
    completed: boolean
}