import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const Input=styled.input`
   border-radius:6px;
   margin:10px;
   width:95%;
   border:none;
`

export default function InputMessage() {
    return (
        <div>
            <div className="row" style={{backgroundColor:'#ededed'}}> 
            <div className="col-md-11" >

                <Input type='text' />
            </div>
            {/* <div className="col-md-3"> */}
              <FontAwesomeIcon icon={faPaperclip} className="fa-lg" style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>
            {/* </div> */}
            </div>
        </div>
    )
}
