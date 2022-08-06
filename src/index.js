
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/index'; 


const App = () => {
    return (
        <div>
            <Router>
                {/* Navbar */}
                <nav>
                    <Link to="/login">Login</Link>
                    
                    <Link to="/allposts">In Your Area</Link>
                    <Link to="/home">Home Page</Link>
                    <Link to="/addpost"> add ur post</Link>
                </nav>
                {/* Main Content Section */}
                <Routes>
                    <Route path="/" element={<Homepage />} />
               </Routes>
               {/*footer*/}
               <element class='footer'>
               </element>            
            </Router>
        </div>
    )
};

const appElement = document.getElementById('app');
const root = ReactDOM.createRoot(appElement);
root.render(<App />)