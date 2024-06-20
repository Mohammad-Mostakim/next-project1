import { Document } from "mongoose";
export interface UserProps extends Document {
    profile: ProfileProps;
    email: string;
    password: Buffer;
    passNeed: boolean;
    atc: boolean;
    authId?: string;
    accProvider: string | "local" | "google" | "facebook" | "github";
    accVerified: boolean;
    role: string;
    salt: string;
    passwordChangeAt?: Date | number;
    passwordResetToken?: string;
    passwordResetTokenExpires?: Date | number;
}


export interface ProfileProps {
    userName: string;
    fname: string;
    lname?: string;
    status?: string;
    birthday?: any;
    occupation?: string;
    workPlace?: string;
    bio?: string;
    email: string;
    contractNumber?: number;
    website?: any;
    gender?: string;
    country?: string;
    photo?: any;
    address?: any;
    languages?: any;
}