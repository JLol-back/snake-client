let connection;

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

  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  // 'Say' Messages

  if (key === "m") {
    connection.write("Say: It's a me, MARIO");
  }

  if (key === "j") {
    connection.write("Say: GO JETS GO");
  }

  if (key === "l") {
    connection.write("Say: sssss");
  }


};

module.exports = {
  setupInput,
};
