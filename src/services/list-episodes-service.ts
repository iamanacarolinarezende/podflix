import { PodcastTransferModel } from "../../models/podcast-transfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes = async(): Promise<PodcastTransferModel> => {

    //Return Interface
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    } 

    //Data list
    const data = await repoPodcast();

    //Content Check
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }


    return responseFormat;
}