class Ninja {
    constructor(name,health,speed,strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Name: ${this.name}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`Health is now at ${this.health}`);
    }
    showStats(){
        console.log(`Name: ${ this.name } Strength: ${ this.strength } Speed: ${ this.speed } Health: ${ this.health }`)
    }
}


class Sensai extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    showStats(){
        console.log(`Name: ${this.name} Strength: ${this.strength} Speed: ${this.speed} Health:${this.health} Wisdom: ${this.wisdom};`)
    }
    speakWisdom() {
        const speakwisdom = super.drinkSake();
        console.log(`you grow healthier with wisdom`);
    }
}
neville = new Sensai("Neville");
neville.sayName();
neville.speakWisdom();
neville.drinkSake();
neville.showStats();
Neville = new Ninja ("Neville2");
Neville.sayName();
Neville.showStats();