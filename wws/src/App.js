import React from "react";
import EditTimeTablePage from "./components/EditTimeTablePage";
import GetMeetingTimePage from "./components/GetMeetingTimePage";
import { Route, Routes } from "react-router-dom";
import MainMenuContainer from "./containers/MainMenuContainer";
import LoginContainer from "./containers/LoginPage";


const App = () => {
   return (
      <Routes>
         <Route path="/" element={<MainMenuContainer></MainMenuContainer>}></Route>
         <Route path="/login" element={<LoginContainer></LoginContainer>}></Route>
         {/* <Route path="/getmeetingpage" element={<GetMeetingTimePage></GetMeetingTimePage>}></Route>
         <Route path="/edittimetablepage" element={<EditTimeTablePage></EditTimeTablePage>}></Route> */}
      </Routes>
   )
}

export default App;