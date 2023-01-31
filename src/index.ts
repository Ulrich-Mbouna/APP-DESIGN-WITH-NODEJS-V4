import * as dotenv from 'dotenv';

dotenv.config();
import app  from './server'

app.listen(3005, () => {
    console.log("Server launch on on http://localhost:3005 ")
})