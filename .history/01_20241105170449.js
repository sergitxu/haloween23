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
    assert.deepStrictEqual(createMagicPotion([4, 5, 6, 2], 8), [2, 3]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(createMagicPotion([4, 3, 2, 3, 4], 6), [0, 2]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(createMagicPotion([0, 0, -2, 3], 2), undefined);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
