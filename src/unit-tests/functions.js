module.exports = {
    appliedOrNot(arr, id){
        let foundIndex = arr.findIndex(job => {
            return id == job.id
        })
        return foundIndex
    },
    organizeDate(job){
        '2018-12-14T07:00:00.000Z'
        let semiFinalDate = [];
        let splitStamp = job.stamp.split("T");
        let withoutDashes = splitStamp[0].split('-');
        semiFinalDate.push(withoutDashes[1], withoutDashes[2], withoutDashes[0])
        let finalDate = semiFinalDate.join('-');

        return finalDate
    },
    convos(){
        
    }
}