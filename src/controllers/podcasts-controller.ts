import {IncomingMessage, ServerResponse} from "http";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify([{
            podcastName: "PodPeople",
            episode: "LARY (CANTORA & COMPOSITORA) - PODPEOPLE SARAU #001",
            videoId: "zdyz-P2oj2s",
            category: ["health", "humor"]
        },
        {
            podcastName: "Inteligência Ltda",
            episode: "CARLOS SALDANHA (DIRETOR DE A ERA DO GELO) - Inteligência Ltda. Podcast #1469",
            videoId: "w-VQVMDLHUg",
            category: ["animation", "humor"]
        }])
    );
};
