import React,{useReducer} from 'react';
import styled from 'styled-components';
import {PropsContext,withDispatch} from './context';
import {ACTIONS} from './reducer';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip,faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Input=styled.input`
   border-radius:6px;
   margin:10px;
   width:95%;
   border:none;
`

export default function InputMessage() {

    const dispatch=React.useContext(PropsContext)


   const handleChange=(e)=>{
       dispatch({
           type:ACTIONS.INPUT_CHANGE,
           payload:e.target.value
        })
   }

    return (
        <PropsContext.Consumer>
     { (keyword)=>  <div>
            <div className="row" style={{backgroundColor:'#ededed'}}> 
            <div className="col-md-11" >

                <Input type='text' value={keyword} onChange={handleChange}/>
            </div>
            {/* <div className="col-md-3"> */}
            {!keyword ?<FontAwesomeIcon icon={faPaperclip} className="fa-lg" style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>:
            <FontAwesomeIcon icon={faPaperPlane} className="fa-lg" style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>} 
            {/* </div> */}
            </div>
        </div>}
        </PropsContext.Consumer>
    )
}
