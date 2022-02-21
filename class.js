class Person {

  // these are the attributes
  name = ''
  age = 0
  height = 0

  // constructor is a special function which will automatically execute when we get a new instance from the class
  constructor(personName, personAge, personHeight) {
    this.name = personName
    this.age = personAge
    this.height = personHeight
  }

  // this is function (method)
  // first we need to create an instance, then we have access to non-static functions
  getAge1(xYearsLater) {
    return this.age + xYearsLater
  }

  // this is a static function
  // we don't need to get a new instance from this class to have access to statics functions
  static getAge2() {
    // in static functions we don't have access to other attributes and methods anymore
    console.log('goh nakhor')
  }

  // this is function
  walk() {
    console.log("walk")
  }
}


// get a new instance from class "Person"
const person = new Person('hassan', 22, 172)
const xYL = person.getAge1(20)
const currentAge = person.age

Person.getAge2()

Person.getAge2 = person.getAge1(80)

console.log(Person.getAge2)
Person.getAge2()

