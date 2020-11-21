import React,{useReducer} from 'react';
import {reducer} from './reducer';
import styled, { keyframes } from 'styled-components';
import {PropsContext,withDispatch} from './context';
import {ACTIONS} from './reducer';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {LiItem} from './chatContent';

const Input=styled.input`
   border-radius:6px;
   margin:10px;
   width:95%;
   border:none;
   outline-style:none;
`

export default function InputMessage() {

    const [{keyword},dispatch]=useReducer(reducer,{
        keyword:''
    })

    // const dispatch=React.useContext(PropsContext)


   const handleChange=(e)=>{
       dispatch({
           type:ACTIONS.INPUT_CHANGE,
           payload:e.target.value
        })
   }

   const handleKeyDown=(e)=>{
       dispatch({
           type:ACTIONS.FORWARD_MESSAGE,
           payload:e.target.value     
       })
       if(e.key==='Enter'){
         console.log("enter pressed")
         {<LiItem keyword={keyword}/>}
        }

        
           
       }
   

    return (
        // <PropsContext.Consumer>
    //  { (keyword)=> 
      <div>
            <div className="row" style={{backgroundColor:'#ededed'}}> 
            <div className="col-md-11" >

                <Input type='text' value={keyword} onChange={handleChange}
                 onKeyDown={handleKeyDown}/>
            </div>
            {/* <div className="col-md-3"> */}
            {!keyword ?<FontAwesomeIcon icon={faPaperclip} className="fa-lg" style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>:
            <FontAwesomeIcon icon={faPaperPlane} className="fa-lg" style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>} 
            {/* </div> */}
            </div>
        </div>
        //}
        // </PropsContext.Consumer>
    )
}
