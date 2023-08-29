const car = {
    name: 'Fiat',
    model: 'f500',
    weight: '850kg',
    color: 'white',
    start: function (){
        console.log('car started');
    },
    drive: function (){
        console.log('car driving');
    }
};

console.log(car.name);
console.log(car['model']);
car.start();

const person ={
    firstName: 'John',
    lastName: "Doe"
};
// alert(person.lastName);
// alert(person["lastName"]);

const shape = {
    r: 10,
    dia(){
        return this.r*2 ;
    }
};
console.log(shape.dia());

function hi(){
  console.log(name);
  console.log(age);
  let name = 'JavaScript';
  let age =21;
}

hi();
