import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
    Nav,
    NewPost,
    newPost,
    MakePost,
    createPost,
    Homepage,
    NewAccount,
    Login,
    ProductsList

} from './components';

const baseURL = 'https://strangers-items.herokuapp.com/2206-FTB-ET-WEB-FT-B';
const App = () => {
  return (
      <div>
          <Router>
              {/* Navbar */}
              <nav>
                  <Link to="/login">Login</Link>
                  
                  <Link to="/allposts">In Your Area</Link>
                  <Link to="/">Home Page</Link>
                  <Link to="/addpost"> add post here</Link>
              </nav>
              {/* Main Content Section */}
              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/" element={<Homepage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/allposts" element={<ProductsList />} />
                  <Route path="/addpost" element={< newPost/>} />

             </Routes>
             {/*foot*/}
             <element class='footer'>
             </element>            
          </Router>
      </div>
  )
};

// React v18
const appElement = document.getElementById('app');
const root = ReactDOM.createRoot(appElement);
root.render(<App />)