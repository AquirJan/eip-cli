var commander = require('commander');

commander
  .version('1.0.0')
  .option('-c, --command', 'test commander')
  .parse(process.argv);