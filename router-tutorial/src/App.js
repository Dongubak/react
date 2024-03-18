import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profiles/:username" element={<Profile></Profile>} />
      </Route>
      <Route path="/articles" element={<Articles></Articles>}>
        <Route path=":id" element={<Article></Article>}></Route>
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/mypage" element={<MyPage></MyPage>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  )
}

export default App;