import {soma, multiplica} from './soma'

describe('soma', () => {
    it('deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect (value).toBe(2)
    })

    it('deve retornar o número por dois', ()=>{
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    it ('deve retornar o número por 3', ()=>{
        const value = multiplica(3, 3)
        expect(value).toBe(9)
    })
})

