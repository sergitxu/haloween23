
function createMagicPotion(potions, target) {
    for(i=0; i<potions.length; i++) {
        for(j=1; j<=potions.length; j++) {
            if(potions[i] + potions[j] === target) {
                return (`${potions[i]}, ${potions[j]}`);
            }
        }
    }
    return undefined
}
  
const potions = [4, 5, 6, 2]
const goal = 8

console.log(createMagicPotion(potions, goal));