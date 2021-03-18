import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.STANDARD_USERNAME,
        PASSWORD: process.env.PASSWORD
    },

    INVALID_USER:{
        USERNAME: process.env.INVALID_USERNAME,
        PASSWORD: process.env.PASSWORD

    }

}

export const USER_DATA = {
    FIRSTNAME: process.env.FIRSTNAME,
    LASTNAME:  process.env.LASTNAME,
    ZIPCODE:   process.env.ZIPCODE

}