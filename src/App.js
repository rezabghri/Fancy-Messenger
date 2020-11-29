import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import styled from "styled-components";
import Main from './messenger/main';
import Search from './messenger/search';
import Spinner from   'react-bootstrap/Spinner';



function App() {

 
  return (
    <div>
      {/* <Spinner animation="border" > 
       <span className="sr-only">Loading...</span> 
       </Spinner> */}
      <Main />
    </div>
  );
}

export default App;


