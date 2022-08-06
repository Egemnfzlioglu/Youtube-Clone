import { YoutubeContext } from "./context/Context";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./style.css";
import Navbar from "./component/Navbar/Navbar";
import Aside from "./component/Body/Aside/Aside";

import AsideBarComponent from "./component/Body/Aside/AsideBarComponent";
import VideosClick from "./component/Body/Sections/PlayerPage/VideosClick";
import SectionVideos from "./component/Body/Sections/SectionVideos";
import Explore from "./component/pages/Explore";
import Shorts from "./component/pages/Shorts";
import Subscriptions from "./component/pages/Subscriptions";
import Library from "./component/pages/Library";
import UserProfile from "./component/pages/UserProfile";
import Channel from "./component/pages/Channel";
import ChangeUser from "./component/pages/ChangeUser";
import Search from "./component/Navbar/NavbarMiddleComponent/Search";
import PlayerSearchPageClick from "./component/Body/Sections/playerSearchPage/playerSearchPageClick";
import SectionVideosSearch from "./component/Body/Sections/SectionVideosSearch";
import PlayerSearchPageClickSide from './component/Body/Sections/playerSearchPage/playerSearchPageClickSide';

function App() {
  const {
    items,
    theme,
    setTheme,
    search,
    setSearch,
    fetchSearch,
    searchItems,
  } = useContext(YoutubeContext);

  return (
    <>
      <BrowserRouter>
        <Navbar
          theme={theme}
          setTheme={setTheme}
          search={search}
          setSearch={setSearch}
          fetchSearch={fetchSearch}
          searchItems={searchItems}
        />

        <AsideBarComponent theme={theme} />

        <Routes>
          <Route path="/" element={<Aside theme={theme} />}>
            <Route
              path="/"
              element={<SectionVideos theme={theme} items={items} />}
            />

            <Route path="explore" element={<Explore theme={theme} />} />
            <Route path="shorts" element={<Shorts theme={theme} />} />
            <Route
              path="subscriptions"
              element={<Subscriptions theme={theme} />}
            />
            <Route path="library" element={<Library theme={theme} />} />
            <Route path="userprofile" element={<UserProfile theme={theme} />} />
            <Route path="channel" element={<Channel theme={theme} />} />
            <Route path="changeuser" element={<ChangeUser theme={theme} />} />
          </Route>

          <Route
            path="/:id"
            element={<VideosClick theme={theme} items={items} />}
          />

          <Route path="search" element={<Search theme={theme} />} />
          <Route
            path="search/:result"
            element={
              <SectionVideosSearch theme={theme} searchItems={searchItems} />
            }
          />

          <Route
            // path=":videoId"
            path="search/:result/:videoId"
            element={
              <PlayerSearchPageClick theme={theme} searchItems={searchItems}   search={search} />
            }
          />
          <Route
            // path=":videoId"
            path="search/:result/:videoId"
            element={
              <PlayerSearchPageClickSide theme={theme} searchItems={searchItems}  />
            }
          />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
