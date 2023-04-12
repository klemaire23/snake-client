const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.1.72",
    port: "50541",
  });
  
  // Event Handler 1
  conn.setEncoding("utf8");
  const connectData = conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};
  
module.exports = {
  connect
};