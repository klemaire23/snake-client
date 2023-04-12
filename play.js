const net = require("net");
const { connect } = require('../snake-client/client')

// setup interface to handle user input from stdin

const setupInput = function() {
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
  });
};

connect();
setupInput();

