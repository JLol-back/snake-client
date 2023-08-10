const net = require("net");
const { IP, PORT } = require('./constants');
// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // Log message on successful connection to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JAL");
    //conn.write("Move: up");
    //setInterval(() => conn.write("Move: up"), 50);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};
