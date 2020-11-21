import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const Div = styled.div`
  margin-left: 30px;
 
  width:100%;
`;

const Input=styled.input`
   margin-top:20px;
   width:80%;
   margin-right:30px;
   border-radius:2px;
   border:none;
   outline-style:none;
   background-color:#ededed;
   height:80%;
`

export default function InputSearch() {
    return (
        <div>
            <Div className="row">
                <div className="col-md-3">
                   <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" style={{justifyContent:"center",alignItems:"center",marginTop:25,color:'#0ec1aa',cursor:"pointer"}}/>
                </div>
                <div className="col-md-9">
                    <Input type="text" />
                </div>

            </Div>
            
        </div>
    )
}
