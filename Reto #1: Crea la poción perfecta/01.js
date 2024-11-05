function createMagicPotion(potions, target) {
    let magicPotions = [];
    for(let i = 0; i < potions.length -1; i++) {
        for(let j = i + 1; j < potions.length; j++) {
            if(potions[i] + potions[j] === target) {
                magicPotions.push([i,j])
            }
        }
    }
    if(magicPotions.length > 0) {
        return magicPotions.sort((a, b) => a[1] - b[1])[0];
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
