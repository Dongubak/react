import React from "react"
import MainMenuPage from "../components/MainMenuPage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const MainMenuContainer = () => {

   const {isLoggedIn} = useSelector((state) => state.login);

   if(!isLoggedIn) {
      return <Navigate to="/login" replace={true} />
   }

   return (
      <MainMenuPage isLoggedIn={isLoggedIn}></MainMenuPage>
   )
}

export default MainMenuContainer;