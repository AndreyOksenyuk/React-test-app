import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import MessageContainer from './components/Message/MessageContainer'
import ProfileContainer from './components/Profile/Profile.container';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Authorization/Login/LoginContainer';
import MyProfileContainer from './components/Profile/MyProfile/MyProfileContainer';

function App(props) {
   return (
      <BrowserRouter>
         <div className="App">
            <HeaderContainer />
            <Nav />
            <div className="mainContent">
               <Route 
                  path='/login'
                  render={() => <LoginContainer />}
               />               
               <Route
                  path="/Myprofile"
                  render={() => <MyProfileContainer />}
               />
               <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
               />


               <Route
                  path="/message"
                  render={() => <MessageContainer />}
               />

               <Route 
                  path="/news" 
                  render={() => <News />}
               />

               <Route 
                  path="/music" 
                  component={Music} 
               />
               <Route 
                  path="/users" 
                  component={UsersContainer} 
               />

               <Route 
                  path="/setting" 
                  component={Setting} 
               />
            </div>
            <Footer />
         </div>
      </BrowserRouter>

   );
}

export default App;
