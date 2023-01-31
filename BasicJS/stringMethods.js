//String and String Methods

let str = "The universe tests you to see if you are capable to handle varied situations.";

//length
console.log('String->', str.length);

//uppercase lowercase
console.log('String->', str.toLowerCase());
console.log('String->', str.toUpperCase());

//Added or concat to string
let a = "Anik";
let b = "Das";
console.log('Concat->', a + b);

//slice(start,end), substring(start,end), substr(start,length)
let c = "Anik Chandra Das";
console.log(c.slice(0,4));
console.log(c.substring(0,13));
console.log(c.substr(4,10));

//replace(), replaceAll()
console.log(c.replace('Chandra', "Aporna"));

//split()
let address = "ইসলামাবাদ (মডেল টাউন) ০২, কেরানীগঞ্জ - ১৩১০, কেরানীগঞ্জ মডেল, ঢাকা";
console.log(address.split(',')[3]);