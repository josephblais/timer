const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === 'b') {
    console.log('BOOP');
    process.stdout.write('\x07');
  }
  
  let num = 1;
  while (num < 10) {
    if (key === num.toString()) {
      if (key === '1') {
        console.log(`You're gonna hear a boop after 1 second`);
      } else {
        console.log(`You're gonna hear a boop after ${key} seconds`);
      }
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log('BOOP!');
      }, num * 1000);
    }
    num++;
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using this BOOP MACHINE, ciao!')
    process.exit();
  }

});