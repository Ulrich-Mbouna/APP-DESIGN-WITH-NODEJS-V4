import * as dotenv from 'dotenv';
import config from "./configs"
dotenv.config();
import app  from './server'

app.listen(config.port, () => {
    console.log(`Server launch on on http://localhost:${config.port} `)
})
