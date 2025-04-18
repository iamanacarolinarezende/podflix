import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);
const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});