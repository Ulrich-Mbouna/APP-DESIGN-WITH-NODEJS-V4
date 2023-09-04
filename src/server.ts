import express from 'express';

import router from './router'
const app = express();
import {protect} from './modules/auth'

import morgan from 'morgan';
import cors from 'cors';
import {createNewUser, signin} from "./handlers/user";

app.use(morgan('dev'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    // console.log("Hello from server ");

    // res.status(200);
    // res.json({
    //     message: 'Hello Express'
    // })
    setTimeout(() => {
        next(new Error('Hello'))
    }, 1000)
})

app.use('/api',protect, router);

app.post('/user', createNewUser);
app.post('/signin', signin);

app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({message: 'Unauthorize'})
    } else if (err.type === 'input') {
        return res.status(400).json({message: `'invalid input : ${err.toString()}`})
    } else {
        return res.status(500).json({message: 'oop server error'})
    }
})
export default app;