import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller";

const server = http.createServer(
    async (req: http.IncomingMessage , res: http.ServerResponse) => {

        //query string
        //http://localhost:3333/api/episode?p=AjudaÊ
        const[baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

        console.log(baseUrl);
        console.log(queryString);

        //list Podcast
        if (req.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        }

        //filter Podcast
        if (req.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});