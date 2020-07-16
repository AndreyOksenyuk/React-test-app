import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav'
import Profile from './components/Profile/Profile';
import Footer from './components/Footer';
import Message from './components/Message/Message';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Settings';

function App(props) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Nav />
            <div className="mainContent">
               <Route
                  path="/profile"
                  
                  render={() => <Profile
                     state={props.state}
                     dispatch={props.dispatch} />}
               />

               <Route
                  path="/message"
                  render={() => <Message
                     dispatch={props.dispatch}
                     state={props.state} />}
               />

               <Route 
                  path="/news" 
                  render={() => <News state={props.state} />}
               />

               <Route 
                  path="/music" 
                  component={Music} 
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
