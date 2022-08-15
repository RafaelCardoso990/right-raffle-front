const URL_FRONT = 'http://localhost:3000'
const URL_BACK = 'http://localhost:4000'

function createUser(){
    return {
        name: "Name Teste",
        email: "email@teste.com",
        password: "123456",
        passwordConfirmation: "123456"
    }
}

const userFactory = {
    createUser,
    URL_FRONT,
    URL_BACK
}

export default userFactory