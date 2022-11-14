import config from "../config.json";
import Favorites from "../src/components/Favorites";
import Header from "../src/components/Header";
import Menu from "../src/components/menu";
import TimeLine from "../src/components/TimeLine";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div>
        <Menu searchInput={setSearch} searchValue={search} />
        <Header user={config} />
        <TimeLine searchValue={search} playlists={config.playlists} />
        <Favorites persons={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
