import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../../models/podcast-transfer-model";
import { serviceYoutubeFilterEpisodes } from "../services/list-real-episodes";

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
    ) => {
        const content: PodcastTransferModel = await serviceListEpisodes();

        res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
        res.write(JSON.stringify(content.body));

        res.end();
};


export const getFilterEpisodes = async(
    req: IncomingMessage, 
    res: ServerResponse
    ) => {


        const content: PodcastTransferModel = await serviceYoutubeFilterEpisodes(req.url);
    

        res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
        res.write(JSON.stringify(content.body));
        
        res.end();
    };