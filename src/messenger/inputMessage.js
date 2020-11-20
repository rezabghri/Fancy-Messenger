import React from 'react';
import styled from 'styled-components';
import {propsContext,withDispatch} from './context';
import {ACTIONS} from './reducer';
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

    //const prop=React.useContext(propsContext)


//    const handleChange=(e)=>{
//        dispatch({
//            type:ACTIONS.INPUT_CHANGE,
//            payload:e.target.value
//         })
//    }

    return (
        <propsContext.Consumer>
     { (keyword,dispatch)=>  <div>
            <div className="row" style={{backgroundColor:'#ededed'}}> 
            <div className="col-md-11" >

                <Input type='text' value={keyword} onChange={e=>dispatch({type:ACTIONS.INPUT_CHANGE,payload:e.target.value })}/>
            </div>
            {/* <div className="col-md-3"> */}
             <FontAwesomeIcon icon={faPaperclip} className="fa-lg" style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>
            {/* </div> */}
            </div>
        </div>}
        </propsContext.Consumer>
    )
}
