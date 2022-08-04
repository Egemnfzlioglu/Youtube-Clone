import { YoutubeContext } from "./context/Context";
import { useEffect,  useContext } from "react";
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

function App() {
  const {
    items,
    loading,
    setLoading,
    theme,
    setTheme,
    search,
    setSearch,
    fetchVideo,
    fetchSearch,
    searchItems,
    setSearchItems,
  } = useContext(YoutubeContext);

  // useEffect(() => {
  //   fetchVideo();
  //   setLoading(false);
  // }, []);

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
          setSearchItems={setSearchItems}
        />
        <AsideBarComponent theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Aside theme={theme} />}>
            <Route
              path=""
              element={
                <SectionVideos
                  theme={theme}
                  setTheme={setTheme}
                  items={items}
                  loading={loading}
                  setLoading={setLoading}
                  fetchVideo={fetchVideo}
                  search={search}
                  setSearch={setSearch}
                  fetchSearch={fetchSearch}
                  searchItems={searchItems}
                />
              }
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
            path=":id"
            element={
              <VideosClick theme={theme} setTheme={setTheme} items={items} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
