const { MOVEMENT, MESSAGES } = require('./constants');

let connection;
let direction;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // Close Application

  if (key === "\u0003") {
    process.exit();
  }

  // Movement Keys

  if (MOVEMENT[key.toString()]) {
    if (direction === undefined) {
      direction = setInterval(() => {
        connection.write(MOVEMENT[key]);
      }, 50);
    }

    if (direction !== undefined) {
      clearInterval(direction);
      direction = setInterval(() => {
        connection.write(MOVEMENT[key]);
      }, 50);
    }

    return direction;
  }

  // 'Say' Messages

  if (MESSAGES[key.toString()]) {
    connection.write(MESSAGES[key]);
  }
};

module.exports = {
  setupInput,
};
