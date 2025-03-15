import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
    async (request: http.IncomingMessage , response: http.ServerResponse) => {

        //query string
        //http://localhost:3333/api/episode?p=PODCASTNAME
        const[baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

        //console.log(baseUrl);
        //console.log(queryString);

        //list Podcast
        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        //filter Podcast
        if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(request, response);
        }
    }
);

const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});