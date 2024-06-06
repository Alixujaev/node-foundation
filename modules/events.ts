const Events = require('events');

class Logger extends Events {
  log(a, b){
    this.emit('event', a + b);
  }
}

const logger = new Logger();

logger.on('event', (data) => {
  console.log(data);
})

logger.log(1, 2)