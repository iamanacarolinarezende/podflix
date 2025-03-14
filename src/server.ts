import * as http from "http";
import {getListEpisodes} from "./controllers/podcasts-controller";

const server = http.createServer(
    async (req: http.IncomingMessage , res: http.ServerResponse) => {
        if (req.method === "GET") {
            await getListEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});