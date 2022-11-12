import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import TimeLine from "../src/components/TimeLine";

function HomePage() {
  const style = {};
  return (
    <>
      <CSSReset />
      <div style={style}>
        <Menu />
        <Header user={config} />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
