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

app.get('/', (req, res) => {
    console.log("Hello from server ");

    res.status(200);
    res.json({
        message: 'Hello Express'
    })
})

app.use('/api',protect, router);

app.post('/user', createNewUser);
app.post('/signin', signin);
export default app;