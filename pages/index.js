import config from "../config.json";
import Favorites from "../src/components/Favorites";
import Header from "../src/components/Header";
import Menu from "../src/components/menu";
import TimeLine from "../src/components/TimeLine";
import { useState, useEffect } from "react";
import { videoService } from "../src/services/videoService";

function HomePage() {
  const [search, setSearch] = useState("");
  const [playlists, setPlaylists] = useState({ ...config.playlists });
  const service = videoService();

  useEffect(() => {
    service.getAllVideos().then((data) => {
      const novaPlaylist = { ...playlists };
      data.data.forEach((video) => {
        novaPlaylist[video.playlist]?.includes(video)
          ? false
          : novaPlaylist[video.playlist]?.push(video);
      });
      setPlaylists(novaPlaylist);
    });
  }, []);

  return (
    <>
      <div>
        <Menu searchInput={setSearch} searchValue={search} />
        <Header user={config} />
        <TimeLine searchValue={search} playlists={playlists} />
        <Favorites persons={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
