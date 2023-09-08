import * as user from "../user";

describe('users hanler', () => {
    it('Should create et new user', async () => {
        const req = { body: { username: 'hello', password: 'cast' } }
        const res = { json({token}) {
                console.log({token})
            expect(token).toBeTruthy()
            } }


        const newUser = user.createNewUser(req, res, () => {})
    })
})
