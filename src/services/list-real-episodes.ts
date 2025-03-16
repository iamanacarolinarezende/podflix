import { IncomingMessage, ServerResponse } from "http";
import { getYoutubePodcastEpisodes } from "../repositories/podcast-youtubeapi";
import { PodcastTransferModel } from "../../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";



export const serviceYoutubeFilterEpisodes = async (podcastName: String | undefined): Promise <PodcastTransferModel> =>{

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await getYoutubePodcastEpisodes(queryString);

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }


    return responseFormat;

}