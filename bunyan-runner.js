const resolve = require('path').resolve;
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'scenario'});
const scenario = require(resolve(process.cwd(), process.argv[2]));
scenario(log, function (value) {
   log.info("value at finish is", value);
});

