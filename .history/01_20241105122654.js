
function createMagicPotion(potions, target) {
    for(i = 0; i<= potions.length; i++) {
        if(potions[i] + potions[i+1] === target) {
            return (potions[i])
        }
    }
    return undefined
}
  
const potions = [4, 5, 6, 2]
const goal = 8

console.log(createMagicPotion(potions, goal));