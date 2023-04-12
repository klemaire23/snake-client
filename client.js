const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });


  conn.setEncoding("utf8");

  // Event Handler 1
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Event Handler 2

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: KBL");
    //   conn.write("Move: up");

    //   setInterval(() => {
    //     conn.write("Move: up");
    //   }, 50)
  });


  return conn;

};


module.exports = {
  connect
};