import { Statuses } from "../types/Types";

export interface User {
    id: number;
    fullName: string;
    email: string;
    status: Statuses;
}