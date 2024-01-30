/* Define Monster and Attack using constructor functions */

function Monster(Name, strength, attacks) {
    this.name = Name;
    this.strength = strength;
    this.attacks = attacks; 

    this.monsterAttack = function () {
        console.log('The ' + this.name + ' monster attacks >>> ');
        let totalAttack = 0;
        for (let a = 0; a < this.attacks.length; a++) {
            totalAttack += this.attacks[a].dealDamage();
        }
        return totalAttack;
    };
}

function Attack(Name, damage) {
    this.name = Name;
    this.damage = damage;

    this.dealDamage = function () {
        console.log('The ' + this.name + ' attack dealt ' + this.damage + ' damage');
        return this.damage;
    };
}

// Add the getStrength and getDamaged functions to the Monster prototype
Monster.prototype.getStrength = function () {
    console.log('The ' + this.name + ' monster\'s strength is ' + this.strength);
    return this.strength;
};

Monster.prototype.getDamaged = function (damage) {
    this.strength -= damage;
    return this.strength;
};

// create the objects using the class
let attack1 = new Attack('flying', 30);
let attack2 = new Attack('surprise', 25);
let attack3 = new Attack('sneak', 35);
let attack4 = new Attack('boss', 40);

let monster1 = new Monster('Fairy', 300, [attack1, attack2]);
let monster2 = new Monster('Werewolf', 1000, [attack3, attack4]);


// Create the calls to generate the output
monster1.getStrength();
monster1.getDamaged(monster2.monsterAttack());
monster1.getStrength();
monster2.getStrength();
monster2.getDamaged(monster1.monsterAttack());
monster2.getStrength();

// DO NOT TOUCH
module.exports.MonsterConstructor = Monster;
module.exports.AttackConstructor = Attack;
