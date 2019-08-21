const toDoData = require('./toDoData');
const testDb = require('../../test/testDb');

describe('Unit tests', () => {

})

describe('Integration Test', () => {
    let db;

    function clearDatabase(){
        return db.query('DELETE FROM todos')
    }

    beforeAll(() => {
        return testDb.initDb().then(database => {
            db = database
        })
    })

    beforeEach(() => {
        return clearDatabase();
    })

    afterAll(() => {
        return clearDatabase();
    })

    describe("get", () => {
        it('should verify data from get endpoint has correct data type', () =>{
            return toDoData.getToDos(db).then(toDoListToCheck => {
                let isDataArray = Array.isArray(toDoListToCheck);
                expect(isDataArray).toBeTruthy()
            })
        })
    })

    describe('create', () => {
        it('should check if data has correctly entered the db and send back the correct info', () => {
            //create an object to test
            const toDo = {
                name: "Finish my lecture",
                description: "Finish lecture without a hiccup"
            }

            return toDoData.createToDo(db, toDo).then(myAddedToDo => {
                //check to see if we are returning a value
                expect(myAddedToDo.length).not.toEqual(0)

                //check to see if object created is the same one that we get back
                expect(myAddedToDo[0]).toMatchObject({
                    id: expect.any(Number),
                    created_at: expect.any(Date),
                    description: toDo.description,
                    name: toDo.name
                })
            })
        })
    })
})

