class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire (){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragonName){
    let gatheringOfDragons = [];
    gatheringOfDragons = dragonName.map((dragon) => dragon.name);
    return gatheringOfDragons;
  }
}
// const puff = new Dragon("Puff", "green");
// const toothless = new Dragon("Toothless", "black");
// console.log(Dragon.getDragons(puff, toothless));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}