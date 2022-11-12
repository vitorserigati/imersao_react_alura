import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Favorites from "../src/components/Favorites";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import TimeLine from "../src/components/TimeLine";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header user={config} />
        <TimeLine playlists={config.playlists} />
        <Favorites persons={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
