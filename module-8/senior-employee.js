/**
 * Create an array of names of senior employees
 */

const employees = [
    {
        name:"Praveen",
        numOfYears:1
    },
    {
        name:"rawat",
        numOfYears:7
    },
    {
        name:"HP",
        numOfYears:4
    },
    {
        name:"patrick",
        numOfYears:5
    },
    {
        name:"Bob",
        numOfYears:6
    }
]

const  result = employees.filter(employee=>employee.numOfYears>3).map(employee=>employee.name)
console.log(result)