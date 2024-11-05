function createMagicPotion(potions, target) {
    for(i=1; i<=potions.length; i++) {
        for(j=0; j<potions.length; j++) {
        console.log(i,j)
            if(potions[i] + potions[j] === target && i!==j) {
                return ([i, j]);
            }
        }
    }
    return undefined
}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(createMagicPotion([4, 5, 6, 2], 8), [
        2,
        3
      ]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(createMagicPotion([10, 5, 2, 3, 7, 5], 10), [
        0,
        2
      ]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
