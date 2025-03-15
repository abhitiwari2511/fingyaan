export interface passwordType {
    password: string;
    hashedPass: string;
}

export interface User {
    id: string;
    email: string;
    fullName?: string;
}