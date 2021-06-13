
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
let createTimeInEvent = function (employee, dateStamp){

    let splitdateStamp = dateStamp.split(" ")
    let hour = splitdateStamp[1]
    let date = splitdateStamp[0] 
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date

    })
    return employee
}

let createTimeOutEvent = function (employee, dateStamp) {
    let splitdateStamp = dateStamp.split(" ")
    let hour = splitdateStamp[1]
    let date = splitdateStamp[0] 
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date

    })
    return employee
}

   let hoursWorkedOnDate = function(employee, findDate) {
       
        let inEvent = employee.timeInEvents.find(function(event){
            
            return event.date === findDate
            // console.log(findDate)
        })
        let outEvent = employee.timeOutEvents.find(function(event){
            return event.date === findDate
        })
        return (outEvent.hour - inEvent.hour) /100

   } 

   let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}

    
   let wagesEarnedOnDate = function(employee, findDate){
    let rawWage = hoursWorkedOnDate(employee, findDate)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}