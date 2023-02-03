import { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    userId: string;
    email: string;
    age: number;
    favoriteFoods: string[];
}
export declare const UserSchema: any;
