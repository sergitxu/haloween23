function battleHorde(zombies, humans) {
    const zombieArray = String(zombies).split('').map(Number);
    const humanArray = String(humans).split('').map(Number);
  
    const result = zombieArray.reduce((acc, zombieCount, index) => {
      const humanCount = humanArray[index] || 0;
      return acc + zombieCount - humanCount;
    }, 0);
  
    if (result > 0) return `${result}z`;
    if (result < 0) return `${-result}h`;
    return 'x';
}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(battleHorde(242, 334), '2h');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(battleHorde(444, 282), 'x');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}