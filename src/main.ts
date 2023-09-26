// let someName: string = "Florian"
// let money: number = 566.99
// let bool: boolean = false
//
//
// console.log(someName)
// console.log(money)
// console.log(bool)
//
// let florian: Person = {
//     name: "Florian",
//     lastName: "Weber"
//
// }
// console.log(florian)
//
// function printPerson(person: Person) {
//     console.log(person.name + " " + person.lastName)
// }
//
// printPerson(florian)
//
// //-----------------------------------------------------------
// type Person = {
//     name: string
//     lastName: string
// }

type Status = "TODO" | "DOING" | "DONE"

let myStatus: Status = "DOING"


type Employee = {
    id: number
    name: string
    lastName: string
    role: Role
}

type Role = "developer" | "designer" | "manager"


let zeshan: Employee = {
    id: 12,
    name: "Zeshan",
    lastName: "Shahid",
    role: "developer",
}

console.log(zeshan)


type Adress = {
    street: string, city: string, postalCode: string
}
type PhoneNumber = {
    type: "home" | "private" | "work"
    number: string
}

type Person = {
    name: string | number
    age: number
    phoneNumbers: PhoneNumber[]
    address: Adress
}


const florian: Person = {
    name: "Florian",
    age: 25,
    phoneNumbers: [{type: "work", number: "09876898"}, {type: "private", number: "012381283"}],
    address: {
        street: "Hauptstrasse 12",
        city: "Frankfurt",
        postalCode: "039"
    }
}

console.log(florian)


type MathOperations = (a: number, b: number) => number

const add: MathOperations = (a, b) => a + b;


console.log(add(5, 6))
