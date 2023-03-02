import * as jt400 from "node-jt400";

let pool: jt400.Connection;
try {
  pool = jt400.pool({
    host: "10.1.1.5",
    user: "IT23000086",
    password: "IT00817",
  });
} catch (e) {
  console.log(e);
  process.exit(1);
}

export default pool;
