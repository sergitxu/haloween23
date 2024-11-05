function findSafestPath(dream) {
  // Code here
  return 0
}

// TESTS
const assert = require('assert');

try {
  const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
    assert.strictEqual(findSafestPath(dream), 7);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}