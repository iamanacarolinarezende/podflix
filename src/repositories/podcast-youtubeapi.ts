import axios from "axios";

const API_KEY = "AIzaSyDEkSlAYjsTUPAx48cM8V7z5ko3dt_c-R8";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function getYoutubePodcastEpisodes(query: string) {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                part: "snippet",
                q: query,
                type: "video",
                maxResults: 10,
                key: API_KEY
            }
        });

        return response.data.items.map((item: any) => ({
            podcastName: item.snippet.channelTitle,
            episode: item.snippet.title,
            videoId: item.id.videoId,
            cover: item.snippet.thumbnails.high.url,
            link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            category: ["general"] // Você pode melhorar essa lógica depois
        }));

    } catch (error) {
        console.error("Error fetching episodes:", error);
        return [];
    }
}
