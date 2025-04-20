import React, { useEffect } from 'react';
import Saidbar from './components/index';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { Library } from './pages/library';
import History from './pages/History';
import Videos from './pages/your-videos';
import Watch from './pages/Watch_later';
import Like from './pages/Like_videos';
import Show from './pages/Show_more';
import { Header } from './pages/header';

const data = [
  {
      id: 1,
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      video_title: "Daily news in Tashkent",
      channel_name: "News",
      likes: 12,
      isLiked: true
  },
  {
      id: 2,
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      video_title: "Manchester City vs Manchester united derby",
      channel_name: "Footbol News",
      likes: 12,
      isLiked: false
  },
  {
      id: 3,
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      video_title: "Daily news in Tashkent",
      channel_name: "Fotbol Tv",
      likes: 12,
      isLiked: false
  },
  {
      id: 4,
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      logo: "",
      video_title: "Daily news in Tashkent",
      channel_name: "News",
      likes: 12,
      isLiked: false
  },
  {
      id: 5,
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo",
      video_title: "Daily news in Tashkent",
      channel_name: "News",
      likes: 12,
      isLiked: false
  }
]

const App = () => {

  useEffect(() => {
    const stored = localStorage.getItem("videoItems");
    if (!stored) {
      localStorage.setItem("videoItems", JSON.stringify(data));
    }
  }, []);

  return (
    <>
      <div className='flex bg-gray-400 h-screen overflow-hidden'>
        <Saidbar />
        <div className='flex flex-col gap-4 w-full overflow-hidden'>
            <Header />
          <div className="ms-3 overflow-y-auto">

            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/like" element={<Like />} />
              <Route path="/show" element={<Show />} />
              <Route path="*" element={<home />} />
            </Routes>
          </div>
        </div>
      </div>
    </>

  )
}
export default App;