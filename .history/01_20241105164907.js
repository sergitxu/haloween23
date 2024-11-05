function createMagicPotion(potions, target) {
    for(i=0; i<potions.length; i++) {
        for(j=i; j<=potions.length; j++) {
        console.log(i,j)
            if(potions[i] + potions[j] === target) {
                return ([i, j]);
            }
        }
    }
    return undefined
}

const potions = [4, 5, 6, 2]
const goal = 8

console.log(createMagicPotion(potions, goal));