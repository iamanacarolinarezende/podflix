import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository";




export const serviceFilterEpisodes = async(podcastName: String | undefined) => {

    //http://localhost:3333/api/episode?p=PODCASTNAME
    const queryString = podcastName?.split("?p=")[1] || ""

    const data = await repoPodcast(queryString);

    return data;
}