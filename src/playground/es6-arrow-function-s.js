// arguments objetc - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments)
  return a + b;
}

console.log(add(5, 5))

// this keyword - no longer used

const user = {
  name: 'Andrew',
  cities: ['Melbourne', 'Paris', 'Boulder'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city + '!')
  }
}

console.log(user.printPlacesLived());

// use arrow ES6 method definition (as below) so that this refers to the currenct object

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy)
  }
}

console.log(multiplier.multiply());

// [2, 4, 6]
