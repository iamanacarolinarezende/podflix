import fs from "fs";
import path from "path";
import { PodcastModel } from "../../models/podcast-model";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async(): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonFile = JSON.parse(rawData);
    return jsonFile;
}