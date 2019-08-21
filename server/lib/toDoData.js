module.exports = {
    getToDos(db){
        return db.query('SELECT * FROM todos')
    },
    createToDo(db, toDo){
        return db.query('INSERT INTO todos (name, description, created_at) values (${name}, ${description}, ${created_at}) returning *', {
            name: toDo.name,
            description: toDo.description,
            created_at: new Date()
        } )
    }
}