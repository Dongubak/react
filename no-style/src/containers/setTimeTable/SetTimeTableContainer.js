import React, { useCallback, useEffect, useState } from "react";
import { where, getDocs, collection, query, doc, getDoc } from "firebase/firestore";
import { authService, db } from "../../fbInstance";
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearSelect, initLesson, selectLesson } from "../../modules/lesson";
import SetTimeTable from "../../components/SetTimeTable";
import LessonList from "../../components/LessonList";
import useAuthStateChanged from "../../modules/useAuthStateChanged";



const SetTimeTableContainer = () => {
   const navigator = useNavigate();
   const {select} = useSelector(state => state.lessons);
   const {uid} = useSelector(state => state.login);

   const [value, setValue] = useState('');
   const [type, setType] = useState('subject');
   const dispatch = useDispatch();
   
   const onChange = useCallback((e) => {
      setValue(e.target.value);
   }, []);

   const onSearch = useCallback(async (e) => {
      e.preventDefault();

      try {
          const q = collection(db, 'App');
          const querySnapshot = await getQuerySnapshot(q);
          const data = querySnapshot.docs.map(doc => doc.data());
          await dispatch(selectLesson(data));
      } catch (error) {
          console.error('Error while searching:', error);
      }
  }, [type, value]);
  
  async function getQuerySnapshot(q) {
      const querySnapshot = await getDocs(query(
          q,
          where(type, '>=', value),
          where(type, '<=', value + '\uf8ff')
      ));
      return querySnapshot;
  }

   // const onSearch = useCallback(async (e) => {
   //    e.preventDefault();
   //    const q = collection(db, 'App');
   //    const querySnapshot = query(q, where(type, '>=', value), where(type, '<=', value + '\uf8ff'));
   //    const data = await getDocs(querySnapshot);
   //    setDatas(data.docs.map(doc => doc.data()));
   //    await dispatch(selectLesson(datas));
   // }, [onChange]);

   const onCheckOnlyOne = useCallback((checkThis) => {
      const checkboxes = document.getElementsByName('filter')
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis.target) {
          checkboxes[i].checked = false
        }
      }
      setType(checkThis.target.value);
    }, [type]);

   //  const initRender = async () => {
   //       try {
   //          const q = collection(db, 'App');
   //          const querySnapshot = await getDocs();
   //          const data = querySnapshot.docs.map(doc => doc.data());
   //          await dispatch(selectLesson(data));
   //       } catch (error) {
   //             console.error('Error while searching:', error);
   //       }
   
   //  }
   
   
    useEffect(() => {
      (async function() {
         const docRef = doc(db, 'user', uid);
         const docSnap = await getDoc(docRef);
         await dispatch(initLesson(docSnap.data().table));
      })();

      return () => {
         dispatch(clearSelect());
      }
    }, [])
    

   return (
      <div>
         <div>
            <SetTimeTable onChange={onChange} onCheckOnlyOne={onCheckOnlyOne} onSearch={onSearch} value={value}></SetTimeTable>
         </div>
         <Outlet></Outlet>
         <LessonList datas={select}></LessonList>
      </div>
      
   )
}

export default SetTimeTableContainer;