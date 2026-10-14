import dotenv from 'dotenv'
dotenv.config();
export const ENV={
    BASE_URL: process.env.BASE_URL,
    USER: process.env.USERNAME,
    PASS: process.env.PASSWORD
};