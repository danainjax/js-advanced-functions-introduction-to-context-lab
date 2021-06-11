
function createEmployeeRecord (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
// Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array

function createEmployeeRecords (employeeDataArray) {
    return employeeDataArray.map(function(array){
        console.log(createEmployeeRecord(array))
        return createEmployeeRecord(array)
    })
}
// let createTimeInEvent = function (employee, date){
//     createEmployeeRecord
//     return employeeWithDate
// }

    
    
