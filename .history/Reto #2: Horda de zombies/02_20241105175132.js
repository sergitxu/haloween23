function battleHorde(zombies, humans) {
    const rounds = zombies.length;
    let resto = 0;
    for(i=0; i<rounds; i++) {
        console.log(Number(String(zombies)[i]), Number(String(humans)[i]))
        resto = Number(String(zombies)[i]) - Number(String(humans)[i]) + resto;
        console.log(resto)
    }
    return 'x'
  }

  battleHorde(242, 334)

// try {
//     assert.strictEqual(battleHorde(242, 334), '2h');
//     console.log('Test ok.');
// } catch (error) {
//     console.error('Failed test:', error);
// }

// try {
//     assert.strictEqual(battleHorde(444, 282), 'x');
//     console.log('Test ok.');
// } catch (error) {
//     console.error('Failed test:', error);
// }