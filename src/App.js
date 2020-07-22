import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Nav />
            <div className="mainContent">
               <Route
                  path="/profile"
                  render={() => <Profile />}
               />

               <Route
                  path="/message"
                  render={() => <Message />}
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
