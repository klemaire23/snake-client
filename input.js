const { moveUpKey, moveDownKey, moveRightKey, moveLeftKey } = require("./constants");
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;

};

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }

    if (key === moveUpKey) {
      connection.write("Move: up");
    }

    if (key === moveLeftKey) {
      connection.write("Move: left");
    }

    if (key === moveDownKey) {
      connection.write("Move: down");
    }
    if (key === moveRightKey) {
      connection.write("Move: right");
    }
    if (key === 'h') {
      connection.write("Say: HA");
    }

    if (key === 'n') {
      connection.write("Say: NA");
    }

    if (key === "p") {
      connection.write("Say: BOO");
    }

  });
};

module.exports = {
  setupInput,
};