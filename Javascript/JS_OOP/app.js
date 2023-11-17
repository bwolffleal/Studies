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
    //this.bday = new Date(bday.replace(/-/g,"/")) //this line is specific for safari if date format is mm-dd-yyyy
    this.bday = new Date(bday)
    this.calculateAge = function() {
        var diff_ms = Date.now() - this.bday.getTime();
        var age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970); //getUTCFullYear() needs -1970 to calculate de age correctly
    }
    console.log(this.calculateAge())
}

const Peter2 = new Person2('Peter', '12/13/1986')
const Alan2 = new Person2('Alan', '5/2/1997')