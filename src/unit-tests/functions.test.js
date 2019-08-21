const functions = require('./functions')

describe('functions', () => {
    describe('appliedOrNot', () => {
        it('should return -1', () =>{
            const jobData = [{id: 10}, {id: 32235}, {id: 69}]
            expect(functions.appliedOrNot(jobData, 105)).toEqual(-1)
        })
    }),
    describe('organizeDate', () => {
        it('should return date in correct format', () => {
            const job = {
                stamp: '2018-12-14T07:00:00.000Z'
            };
            expect(functions.organizeDate(job)).toBeTruthy();
            expect(functions.organizeDate(job)).toEqual('12-14-2018')
        })

    }),
    describe('convos', () => {
        
    })
})