const functions = require('./functions')

describe('functions', () => {
    describe('appliedOrNot', () => {
        it('returns -1', () => {
            const data = [{job_id: 5},{job_id: 8},{job_id: 12}];
            expect(functions.appliedOrNot2(data, 3)).toEqual(-1)
        }),
        it('returns index', () => {
            const data = [{job_id: 5},{job_id: 8},{job_id: 12}];
            expect(functions.appliedOrNot2(data, 12)).toEqual(2)
        })

    }),
    describe('organizeDate', () => {
        it('returns date in order', () => {
            const job = {stamp: '2018-12-14T07:00:00.000Z'};
            expect(functions.organizeDate(job)).toEqual('12-14-2018')
        })
    }),
    describe('convos', () => {
        it('returns not null', () => {
            const arr = ['Hello', null, 'Bye']
            expect(functions.convos2(arr)).toEqual(['Hello', 'Bye'])
        })
    })
})