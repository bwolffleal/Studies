const Smith = {
    name: 'Smith',
    age: 40
}

console.log(Smith)

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}

const Peter = new Person('Peter', 50)
const Alan = new Person('Alan', 20)


function Person2(name, bday) {
    this.name = name
    this.bday = new Date(bday.replace(/-/g,"/")) //this line is specific for safari if date format is mm-dd-yyyy
    //this.bday = new Date(bday)
    this.calculateAge = function() {
        var diff_ms = Date.now() - this.bday.getTime();
        var age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970); //getUTCFullYear() needs -1970 to calculate de age correctly
    }
    console.log(this.calculateAge())
}

const Peter2 = new Person2('Peter', '12/13/1986')
const Alan2 = new Person2('Alan', '5/2/1997')

function Person3(name, bday) {
    this.name = name
    this.bday = new Date(bday.replace(/-/g,"/")) //this line is specific for safari if date format is mm-dd-yyyy
    //this.bday = new Date(bday)
}
Person3.prototype.calculateAge = function() {
    var diff_ms = Date.now() - this.bday.getTime();
    var age_dt = new Date(diff_ms)

    return Math.abs(age_dt.getUTCFullYear() - 1970); //getUTCFullYear() needs -1970 to calculate de age correctly
}

const Peter3 = new Person3('Peter', '12/13/1986')
const Alan3 = new Person3('Alan', '5/2/1997')

console.log(Peter3.calculateAge===Alan3.calculateAge)

console.log(Peter3.calculateAge())

function Person4(firstname, lastname, bday) {
    this.firstname = firstname
    this.lastname = lastname
    this.bday = bday
}
Person4.prototype.calculateAge = function() {
    var diff_ms = Date.now() - this.bday.getTime();
    var age_dt = new Date(diff_ms)

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
Person4.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`
}
Person4.prototype.setNewLastName = function (newLastName) {
    this.lastname = newLastName
}

const Peter4 = new Person4('Peter', 'Bright' ,'12/13/1986')
const Alan4 = new Person4('Alan', 'Shepperd', '5/2/1997')

console.log(Peter4.getFullName())
Peter4.setNewLastName('Parker')
console.log(Peter4.getFullName())
console.log(Peter4.hasOwnProperty('firstname'))
console.log(Peter4.hasOwnProperty('calculateAge'))

function Person5(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

Person5.prototype.message = function() {
    return `Hello ${this.firstname} ${this.lastname}`
}

const Peter5 = new Person5('Peter', 'Parker')
console.log(Peter5.message())

function Customer(firstname, lastname, phone, email) {
    Person5.call(this, firstname, lastname)
    this.phone = phone
    this.email = email
}

Customer.prototype = Object.create(Person5.prototype);
Customer.prototype.constructor = Customer

const customer = new Customer('Peter', 'Parker', '1234', 'email@email.com')

console.log(customer.message())
console.log(customer)