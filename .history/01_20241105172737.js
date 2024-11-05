function createMagicPotion(potions, target) {
    let magicPotions = [];
    for(let i = 0; i < potions.length; i++) {
        for(let j = i + 1; j < potions.length; j++) {
            console.log(i,j);
            if(potions[i] + potions[j] === target) {
                magicPotions.push([i,j])
            }
        }
        // get the item with the minor second value
        
    }
    console.log(magicPotions)
    if(magicPotions.length === 1) {
        return magicPotions[0];
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
