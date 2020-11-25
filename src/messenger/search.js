import React from "react";
import InputSearch from './inputSearch';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faSearch,faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Div = styled.div`
  margin-left: 30px;
 
  width:100%;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  padding-top: 25px;
`;

// const Fontawe=styled.FontAwesomeIcon`
//    justify-content:center;
//    align-items: center;
//    font-size: 20px;
//    padding-top: 25px;

// `

export default function Search({onInputSearch}) {

  
  const handleSearchClick=()=>{
       onInputSearch();
  }

  return (
    <div>
      <Div className="row col-lg-12 col-md-12">
        <div className="col-md-3">
          {/* <i className="glyphicon glyphicon-menu-hamburger" ></i> */}
          <FontAwesomeIcon icon={faBars} className="fa-lg" style={{justifyContent:"center",alignItems:"center",marginTop:25,color:'#0ec1aa',cursor:"pointer"}}/>
          {/* <i className="fas fa-bars fa-lg" aria-hidden="true"></i> */}
        </div>
        <div className="col-md-6">
          <H2>Fancy Messenger</H2>
        </div>
        <div className="col-md-3">
          {/* <i className="glyphicon glyphicon-search"></i> */}
          <FontAwesomeIcon icon={faSearch} className="fa-lg" onClick={handleSearchClick}  style={{justifyContent:"center",alignItems:"center",marginTop:25,color:'#0ec1aa',cursor:"pointer"}}/>
        </div>
      </Div>
    </div>
  );
}
