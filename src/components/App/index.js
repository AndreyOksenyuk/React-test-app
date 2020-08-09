import React from 'react';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import style from './App.module.scss'
import Nav from '../Nav/Nav'
import Footer from '..//Footer/Footer';
import Music from '../Music/MusicContainer';
import Setting from '../Settings/SettingsContainer';
import UsersContainer from '../Users/UsersContainer';
import HeaderContainer from '../Header/HeaderContainer';
import LoginContainer from '../Authorization/Login/LoginContainer';
import MyProfileContainer from '../Profile/MyProfile/MyProfileContainer';
import Page404 from '../module/ErrorPage404'
import { whitSuspense } from '../../hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('../Profile/Profile.container'));
const MessageContainer = React.lazy(() => import('../Message/MessageContainer'));
const News = React.lazy(() => import('../News/NewsContainer'));

const SocialNetworkApp = (props) => {

   return (
      <HashRouter>
         <React.Fragment>
            <div className={
               props.error && props.textError
                  ? style.AppError_active
                  : style.AppError
            }>
               <h5>{props.error}</h5>
               <p>{props.textError}</p>
            </div>

            <HeaderContainer />
            <Nav />
            <main className={style.mainContent}>
               <Switch>
                  <Route
                     exact path='/'
                     render={() => <Redirect to='/Myprofile' />}
                  />
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
                     render={whitSuspense(ProfileContainer)}
                  />
                  <Route
                     path="/message"
                     render={whitSuspense(MessageContainer)} />

                  <Route
                     path="/news"
                     render={whitSuspense(News)}
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
                  <Route 
                     path="*"
                     component={Page404}
                  />
               </Switch>
            </main>
            <Footer />
         </React.Fragment>
      </HashRouter>
   );
}

export default SocialNetworkApp;
