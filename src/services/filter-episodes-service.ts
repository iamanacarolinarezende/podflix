import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";




export const serviceFilterEpisodes = async(podcastName: String | undefined): Promise <PodcastTransferModel> => {

    //Return Interface
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    } 

    //Data Search
    //Model: http://localhost:PORT/api/episode?p=PODCASTNAME
    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await repoPodcast(queryString);

    //Content Check
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }


    return responseFormat;
}