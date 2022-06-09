const net = require("net");
const {IP, port} = require('./constants')
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: port// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Connection secured");
    conn.write("Name: SHA");
    conn.write("Say: heck") 
  });

  return conn;
};


module.exports = {connect};