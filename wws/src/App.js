import React from "react";
import LoginPageWrapper from "./components/LoginPage";
import MainMenuPage from "./components/MainMenuPage";
import EditTimeTablePage from "./components/EditTimeTablePage";
import GetMeetingTimePage from "./components/GetMeetingTimePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<MainMenuPage></MainMenuPage>}></Route>
         <Route path="/login" element={<LoginPage></LoginPage>}></Route>
         <Route path="/getmeetingpage" element={<GetMeetingTimePage></GetMeetingTimePage>}></Route>
         <Route path="/edittimetablepage" element={<EditTimeTablePage></EditTimeTablePage>}></Route>
      </Routes>
   )
}

export default App;