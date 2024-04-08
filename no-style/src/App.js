import './App.css';

import ArrangeMeeting from './containers/arrangeMeeting/ArrangeMeeting';
import LoginContainer from './containers/Auth/LoginContainer';
import { Route, Routes } from 'react-router';
import NotFound from './containers/NotFound';

import WelcomeContainer from './containers/WelcomContainer';
import LayOutContainer from './containers/arrangeMeeting/LayOutContainer';
import SetTimeTableContainer from './containers/setTimeTable/SetTimeTableContainer';
import LessonDetailContainer from './containers/setTimeTable/LessonDetailContainer';
import SigninContainer from './containers/Auth/SigninContainer';


function App() {

  return (
    <>
        <Routes>
          <Route path='/login' element={<LoginContainer></LoginContainer>}></Route>
          <Route path='signIn' element={<SigninContainer></SigninContainer>}></Route>
          <Route path='/' element={<LayOutContainer></LayOutContainer>}>
            <Route index element={<WelcomeContainer></WelcomeContainer>}></Route>
            <Route path='/setTimeTable' element={<SetTimeTableContainer></SetTimeTableContainer>}>
              <Route path=':index' element={<LessonDetailContainer></LessonDetailContainer>}></Route>
            </Route>
            <Route path='/arrageMeeting' element={<ArrangeMeeting></ArrangeMeeting>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes>
      
    </>
  );
}

export default App;