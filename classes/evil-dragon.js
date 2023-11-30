const Dragon = require("./dragon");

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner(){
        return this.evilDoings.forEach((evils) => console.log(`${this.name} will ${evils}`));
    }

    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}


module.exports = EvilDragon;