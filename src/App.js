import Layout from "./component/layout";
import Tools from "./component/tools";
import Channels from "./component/channels";
import Pricing from "./component/pricing";
import Blogs from "./component/blogs";
import Login from "./component/login";
import Start from "./component/start";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importing animations
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
     Aos.init();
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tools />} />
          <Route path="channels/" element={<Channels />} />
          <Route path="pricing/" element={<Pricing />} />
          <Route path="blogs/" element={<Blogs />} />
          <Route path="login/" element={<Login />} />
          <Route path="start/" element={<Start />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
