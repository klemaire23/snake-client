const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.1.72",
    port: "50541",
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
});



  return conn;
};
  
module.exports = {
  connect
};