const times = process.argv.slice(2);

for (let time of times) {
  time = parseFloat(time);
  if (time < 0 || isNaN(time)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);

}
