const EvgenyPromise = require('./promise')

describe('Evgeny Promise:', () => {

    let promise
    let executorSpy
    let succesResult = 42

    let t = setTimeout

    beforeEach(() => {
        executorSpy = jest.fn(r => t(()=> r(succesResult)) , 150)
        promise =  new EvgenyPromise(executorSpy)
    })
    test('should exists and to be defind ', () => {
        expect(EvgenyPromise).toBeDefined()
        expect(typeof EvgenyPromise).toBe('function')
    })

    test('instanсe should have methods:then , catch,finally ' , () => {
        expect(promise.then).toBeDefined()
        expect(promise.catch).toBeDefined()
        expect(promise.finally).toBeDefined()
    })

    test('should call executor function' , () => {
        expect(executorSpy).toHaveBeenCalled()
    })

    /*test('should get data in then block  and chain them' ,  async () => {
     const result =   await promise.then(num => num).then(num => num * 2)
        expect(result).toBe(succesResult * 2 )
    })*/

})