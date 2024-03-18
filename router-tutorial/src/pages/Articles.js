import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
   const activeStyle = {
      color: 'green',
      fontSize: 21,
   };
   return(
      <div>
         <Outlet></Outlet>
         <ul>
            <ArticleItem id={1}></ArticleItem>
            <ArticleItem id={2}></ArticleItem>
            <ArticleItem id={3}></ArticleItem>
         </ul>   
      </div>
   )
}

const ArticleItem = ({id}) => {
   const activeStyle = {
      color: 'green',
      fontSize: 21,
   }

   return (
      <li>
         <NavLink to={`/articles/${id}`} style={({isActive}) => (
            isActive ? activeStyle : undefined
         )}>게시글 {id}</NavLink>
      </li>
   )
}

export default Articles;