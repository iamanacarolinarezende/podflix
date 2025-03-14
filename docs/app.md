# PodFlix
### Description
App designed to organize podcast episodes into intuitive categories, making it easy to discover new content that aligns with your interests.

### Features
- List all episodes from podcasts in categories sections
  [Health, Fitness, Mental health, Humor, Animation]
- Filter episodes by podcast names

### How
- List all
It will return a rest API (json) with the podcast name, episode name, cover image and episode link.

```js
[
{
    podacstName: "PodPeople",
    episode: "LARY (CANTORA & COMPOSITORA) - PODPEOPLE SARAU #001",
    videoID: "zdyz-P2oj2s",
    cover: "src="https://i.ytimg.com/vi/zdyz-P2oj2s/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=zdyz-P2oj2s",
    category: ["health", "humor"]
},
{
    podacstName: "Inteligência Ltda",
    episode: "CARLOS SALDANHA (DIRETOR DE A ERA DO GELO) - Inteligência Ltda. Podcast #1469",
    videoId: "w-VQVMDLHUg",
    cover: "src="https://i.ytimg.com/vi/w-VQVMDLHUg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=w-VQVMDLHUg",
    category: ["animation", "humor"]
}
]
```

API rest + tipeScript (No Framework)