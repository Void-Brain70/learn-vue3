function personInfo(name,phone,date_of_birth){
    this.name = name;
    this.phone= phone;
    this.birth = new Date(date_of_birth);
    this.ageCalculate = ()=>{
        const diff = Date.now() - this.birth.getTime();
        const age = new Date(diff);
        return age.getUTCFullYear() - 1970;
    }
}

const info = new personInfo("Anik Das",'01626838003', '1998-08-18');
console.log(info.ageCalculate());


function playerInfo(name,club,national_team,goal){
    this.name = name;
    this.club = club;
    this.national_team = national_team;
    this.goal = goal;
}
const palyer = new playerInfo('Messi','PSG','Argentina','779');
console.log(palyer);


class car {
    constructor(name,model,color){
        this.name=  name;
        this.model = model;
        this.color = color;
    }
    getFullModel(){
        return this.name + ' ' + this.model;
    }
    setName(newName){
        this.name = newName;
    }

}
const obj = new car("BMW","RX-2","GRAY");
obj.setName("AUDI");
console.log(obj);