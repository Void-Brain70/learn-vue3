//object literals
let car = {
    name : 'BMW',
    modelName: 'BMW i4 M50',
    weight: 850,
    color: 'gray'
}

console.log('Car :>> ', car);

//object properties access two ways
console.log(car.name, car['color']);

//Object -> Array
let r = Object.getOwnPropertyNames(car);
let k = Object.keys(car);
console.log(r,k);

//object value changed
car.name = "audi";
car.modelName = 'audi 45li';
car.color= 'red';
car.weight = 980;

Object.defineProperty(car, 'name', {value : "Corola"});

console.log(car);

//array itaration
let n = 'anik aporna';
for(const i of n){
    console.log(i);
}
for(const m in n){
    console.log(m);
}