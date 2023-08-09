const net = require("net");
// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // Log message on successful connection to server
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = connect;