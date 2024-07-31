import './index.css';
import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './Navbar';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';  
import Create from './Create';

function App() {
  
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000) 
  // }, [])

  //CALLS ON API TO GET DATABASE SERVER SIDE
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response=>response.json()
  //   ).then(
  //     data => { 
  //       // setBackendData(data)
  //       console.log(data);
  //     }
  //   )
  // }, [])

  return (

      <div className="App">
    

          {/* <SPLoader /> */}


          {/* <div id = "spinner" class="loading-container">
            <img src="./loadspin.gif"/>
          </div> */}


          <header className="App-header">

              <Navbar />

              <div className = "content">
              
                {/* <Route path="./Home" element={<Home />} /> */}
                {/* <Route path="./" element={<Home />} /> */}


                <img src={logo} className="App-logo" alt="logo" />

                {/* <Home /> */}
                {/* <About /> */}

                <Router basename ="/">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/create" element={<Create />}/>

                  </Routes>
                
                </Router>

                <p>
                  

                </p>
                {/* <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a> */}

                {/* <div>
                  {(typeof backendData.users === 'undefined') ? ( <p>Loading...</p>): (
                    backendData.users.map((user, i) => (
                      <p key = {i}> {user} </p>
                    ))
                  )}
                </div> */}
                
              </div>
              
             
          </header>

        
      </div>
     

  );
}

export default App;
