import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from '../modules/sample'

const SampleContainer = () => {

   const { post, users } = useSelector(state => {
      const ret = {
         post: state.sample.post,
         users: state.sample.users
      }
      return ret;
   });

   const {loadingPost, loadingUsers} = useSelector((state) => {
      const ret = {
         loadingPost: state.loading['sample/GET_POST'],
         loadingUsers: state.loading['sample/GET_USRES'],
      }

      return ret
   })

   const dispatch = useDispatch();

   const onClick = () => {
      dispatch(getPost(1));
      dispatch(getUsers(1));
   }

   console.log(post, users, loadingPost, loadingUsers);

   return (
      <Sample loadingPost={loadingPost} loadingUsers={loadingUsers}
      post={post} users={users} onClick={onClick}></Sample>
   )
}

export default SampleContainer;