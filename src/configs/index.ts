import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const stage = process.env.STAGE = process.env.STAGE || 'local'

let envConfig

if(stage === 'production') {
    envConfig = require('./production').default
} else if (stage === 'testing') {
    envConfig = require('./testing').default
} else {
    envConfig = require('./local').default
}

console.log({stage})

export default merge({
    stage,
    port: 3001,
    env: process.env.NODE_ENV,
    secrets: {
        jwt: process.env.JWT_SECRET,
        dbUrl: process.env.DATABASE_URL,
    }
}, envConfig)
