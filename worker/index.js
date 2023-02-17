const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();
var values = { 0: 1, 1: 1 };
function fib(index) {
  if (index < 2) return 1;
  if (!((index - 1) in values)) {
    values[index - 1] = fib(index - 1)
  }
  if (!((index - 1) in values)) {
    values[index - 2] = fib(index - 2)
  }
  return values[index - 1] + values[index - 2];
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
