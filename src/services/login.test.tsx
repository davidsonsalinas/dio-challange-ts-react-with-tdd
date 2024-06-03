import { login } from "./login"

interface ITestUser{
    email: string;
    password: string;
}

const testUser: ITestUser = {
    email: 'teste@test',
    password: '123456'
};

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('deve retornar login', () => {
        const { email, password } = testUser; 
        login(email, password); 
        expect(mockAlert).toBeCalledWith(`Email: ${email} Senha: ${password}`); // Use the variables in the expect statement
    })
})