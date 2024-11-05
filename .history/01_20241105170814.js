function createMagicPotion(potions, target) {
    for(let i = 0; i < potions.length; i++) {
        
            if(potions[i] + potions[i+1] === target) {
                return [i, i+1];
            }
        
    }
    return undefined;
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

try {
    assert.deepStrictEqual(createMagicPotion([10, 5, 2, 3, 7, 5], 10), [3, 4]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
